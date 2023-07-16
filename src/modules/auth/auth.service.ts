import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Permission } from '@prisma/client';
import * as argon2 from 'argon2';
import { FastifyReply } from 'fastify';
import * as generatePassword from 'generate-password';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/@generated/user/user.model';
import { JwtPayload, Tokens } from 'src/common/types/token.type';
import { generateUsername } from 'unique-username-generator';

import { LoginInput } from './auth.type';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async superAdmin(key: string): Promise<User> {
    if (key !== this.configService.get<string>('SUPER_ADMIN_KEY')) {
      throw new BadRequestException('Invalid key');
    }

    const username = generateUsername('-', 2, 16);

    const password = generatePassword.generate({
      length: 16,
      numbers: true,
      symbols: true,
      uppercase: true,
      excludeSimilarCharacters: true,
    });

    const hashedPassword = await argon2.hash(password);
    return await this.prisma.user.create({
      data: {
        name: username,
        username,
        password: hashedPassword,
        permissions: ['ADMIN'],
      },
    });
  }

  async login(userParams: LoginInput, response: FastifyReply): Promise<User> {
    const { username, password } = userParams;

    const user = await this.prisma.user.findFirst({
      where: {
        username,
        isDeactivated: false,
        isDeleted: false,
      },
    });

    if (!user) {
      throw new BadRequestException(
        'The user does not exist or has been deactivated.',
      );
    }

    if (!(await argon2.verify(user.password, password))) {
      throw new BadRequestException('The password entered is incorrect.');
    }

    const tokens = await this.getTokens(
      user.id,
      user.username,
      user.permissions,
    );

    await this.updateRtHash(user.id, tokens.rt);
    this.storeTokensInCookie(response, tokens);

    // await this.prisma.auditLog.create({
    //   data: {
    //     userId: user.id,
    //     action: 'LOGIN',
    //     description: 'User logged in',
    //   },
    // });

    return user;
  }

  async logout(userId: string, response: FastifyReply): Promise<boolean> {
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken: null,
      },
    });

    this.removeTokensFromCookie(response);

    return true;
  }

  async refreshTokens(
    userId: string,
    rt: string,
    response: FastifyReply,
  ): Promise<boolean> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId,
        isDeleted: false,
      },
    });

    if (!user || !user.refreshToken || user.isDeleted) {
      this.removeTokensFromCookie(response);
      throw new ForbiddenException('Access Denied');
    }

    if (!(await argon2.verify(user.refreshToken, rt))) {
      this.removeTokensFromCookie(response);
      throw new ForbiddenException('Refresh token is invalid');
    }

    const tokens = await this.getTokens(
      user.id,
      user.username,
      user.permissions,
    );
    await this.updateRtHash(user.id, tokens.rt);
    this.storeTokensInCookie(response, tokens);

    return true;
  }

  async getTokens(
    id: string,
    username: string,
    permissions: Permission[],
  ): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: id,
      username,
      permissions,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get<string>('AT_SECRET'),
        expiresIn: '6m',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.configService.get<string>('RT_SECRET'),
        expiresIn: '16m',
      }),
    ]);

    return {
      at,
      rt,
    };
  }

  async updateRtHash(userId: string, rt: string): Promise<void> {
    const refreshToken = await argon2.hash(rt);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        refreshToken,
      },
    });
  }

  storeTokensInCookie(response: FastifyReply, tokens: Tokens): void {
    response.setCookie('at', tokens.at, {
      httpOnly: true,
      secure: this.configService.get<string>('NODE_ENV') === 'production',
      sameSite: 'strict',
      expires: new Date(Date.now() + 1000 * 60 * 5),
      path: '/',
      signed: true,
    });

    response.setCookie('rt', tokens.rt, {
      httpOnly: true,
      secure: this.configService.get<string>('NODE_ENV') === 'production',
      sameSite: 'strict',
      expires: new Date(Date.now() + 1000 * 60 * 15),
      path: '/',
      signed: true,
    });
  }

  removeTokensFromCookie(response: FastifyReply): void {
    response.clearCookie('at', {
      path: '/',
    });

    response.clearCookie('rt', {
      path: '/',
    });
  }
}
