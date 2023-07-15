import { SetMetadata } from '@nestjs/common';

import { Permission } from '../types/permission.enum';

export const PERMISSION_KEY = process.env.PERMISSION_KEY;
export const Permissions = (...permissions: Permission[]) =>
  SetMetadata(PERMISSION_KEY, permissions);
