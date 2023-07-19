import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { JwtPayload } from '../types/token.type';

export const GetCurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext): string => {
    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user as JwtPayload;
    return user.sub;
  },
);
