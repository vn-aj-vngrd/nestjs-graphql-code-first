import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';

import { AuthService } from './auth.service';
import { LoginInput } from './dtos/login.input';
import { LoginResponse } from './responses/login.response';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(@Args('loginInput') loginInput: LoginInput, @Context() context) {
    return this.authService.login(context.user);
  }
}
