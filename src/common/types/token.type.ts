import { Permission } from '@prisma/client';

export type JwtPayload = {
  sub: string;
  username: string;
  permissions: Permission[];
};
