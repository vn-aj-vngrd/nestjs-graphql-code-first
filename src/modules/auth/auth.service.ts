import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import { JwtPayload } from 'src/common/types/token.type';

import { LoginInput } from './dtos/login.input';
import { LoginResponse } from './responses/login.response';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async validateUser(username: string, password: string): Promise<boolean> {
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

    return true;
  }

  async login(loginInput: LoginInput): Promise<LoginResponse> {
    const { username, password } = loginInput;

    const user = await this.prisma.user.findFirst({
      where: {
        username,
        isDeactivated: false,
        isDeleted: false,
      },
      include: {
        shipCreatedBy: true,
        shipUpdatedBy: true,
        shipDeletedBy: true,
        _count: true,
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

    // TODO: Create audit log
    // await this.prisma.auditLog.create({
    //   data: {
    //     userId: user.id,
    //     action: 'LOGIN',
    //     description: 'User logged in',
    //   },
    // });

    const jwtPayload: JwtPayload = {
      sub: user.id,
      username: user.username,
      permissions: user.permissions,
    };

    const access_token = await this.jwtService.signAsync(jwtPayload, {
      secret: this.configService.get<string>('AT_SECRET'),
      expiresIn: this.configService.get<string>('AT_EXPIRES_IN'),
    });

    return {
      access_token,
      user,
    };
  }
}
