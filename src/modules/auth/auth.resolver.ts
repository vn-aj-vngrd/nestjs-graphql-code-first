import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Public } from 'src/common/decorators/public.decorator';
import { GqlAuthGuard } from 'src/common/guards/gql-auth.guard';

import { AuthService } from './auth.service';
import { LoginInput } from './dtos/login.input';
import { LoginResponse } from './dtos/login.response';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @Public()
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() context: any,
  ) {
    return this.authService.login(context.user);
  }
}
