import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { FastifyRequest } from 'fastify';
import { Strategy } from 'passport-jwt';
import { JwtPayload, JwtPayloadWithRt } from 'src/common/types/token.type';

@Injectable()
export class RTStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: RTStrategy.extractJWTFromCookie,
      secretOrKey: process.env.RT_SECRET,
      ignoreExpiration: false,
      passReqToCallback: true,
    });
  }

  validate(request: FastifyRequest, payload: JwtPayload): JwtPayloadWithRt {
    const cookie = request.unsignCookie(request.cookies['rt']);
    if (!cookie.valid) {
      throw new BadRequestException('Refresh token is invalid or has expired');
    }

    if (!cookie.value) {
      throw new BadRequestException('Refresh has malformed');
    }

    const refreshToken = cookie.value as string;

    return {
      ...payload,
      refreshToken,
    };
  }

  private static extractJWTFromCookie(request: FastifyRequest): string | null {
    if (!request.cookies['rt']) {
      return null;
    }

    const cookie = request.unsignCookie(request.cookies['rt']);
    if (!cookie.valid) {
      return null;
    }

    return cookie.value;
  }
}
