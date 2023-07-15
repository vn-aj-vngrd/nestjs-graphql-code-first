import { SetMetadata } from '@nestjs/common';

export const PUBLIC_KEY = process.env.PUBLIC_KEY;
export const Public = () => SetMetadata(PUBLIC_KEY, true);
