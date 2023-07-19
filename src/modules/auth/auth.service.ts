import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/@generated/user/user.model';
import { JwtPayload } from 'src/common/types/token.type';

import { LoginResponse } from './responses/login.response';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        username,
        isDeactivated: false,
        isDeleted: false,
      },
    });

    if (!(await argon2.verify(user.password, password))) {
      return null;
    }

    return user;
  }

  async login(user: User): Promise<LoginResponse> {
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

    const access_token = await this.jwtService.signAsync(jwtPayload);

    return {
      access_token,
      user,
    };
  }
}
