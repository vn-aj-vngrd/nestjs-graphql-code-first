import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { FastifyRequest } from 'fastify';
import { PrismaService } from 'nestjs-prisma';
import { Strategy } from 'passport-jwt';
import { JwtPayload } from 'src/common/types/token.type';

@Injectable()
export class ATStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ATStrategy.extractJWTFromCookie,
      secretOrKey: process.env.AT_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: payload.sub,
        isDeactivated: false,
        isDeleted: false,
      },
    });

    if (!user) {
      return false;
    }

    return payload;
  }

  private static extractJWTFromCookie(request: FastifyRequest): string | null {
    if (!request.cookies['at']) {
      return null;
    }

    const cookie = request.unsignCookie(request.cookies['at']);
    if (!cookie.valid) {
      return null;
    }

    return cookie.value;
  }
}
