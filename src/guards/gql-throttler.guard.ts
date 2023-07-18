import { ExecutionContext, Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

@Injectable()
export class GqlThrottlerGuard extends ThrottlerGuard {
  getRequestResponse(context: ExecutionContext) {
    const ctx = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    const headers = ctx?.headers || {};
    const ip =
      headers['x-forwarded-for'] ||
      ctx?.connection?.remoteAddress ||
      ctx?.socket?.remoteAddress;
    return { req: ctx, res, ip };
  }
}
