import { Resolver } from '@nestjs/graphql';

import { UsersService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private usersService: UsersService) {}
}
