import { Permission } from '@prisma/client';

export type Tokens = {
  at: string;
  rt: string;
};

export type JwtPayload = {
  sub: string;
  username: string;
  permissions: Permission[];
};

export type JwtPayloadWithRt = JwtPayload & { refreshToken: string };
