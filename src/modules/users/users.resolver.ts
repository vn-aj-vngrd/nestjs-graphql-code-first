import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/user/user.model';
import { UserCreateManyInput } from 'src/@generated/user/user-create-many.input';
import { UserUncheckedUpdateManyInput } from 'src/@generated/user/user-unchecked-update-many.input';
import { ParamArgs } from 'src/common/args';
import { GetCurrentUserId } from 'src/common/decorators/get-current-user-id.decorator';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { Permission } from 'src/common/types/permission.enum';

import { UsersService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  @Permissions(Permission.ADMIN)
  async user(@Args('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Query(() => [User])
  @Permissions(Permission.ADMIN)
  users(@Args() args: ParamArgs): Promise<User[]> {
    return this.usersService.findAll(args);
  }

  @Mutation(() => User)
  @Permissions(Permission.ADMIN)
  async createUser(
    @Args('input') input: UserCreateManyInput,
    @GetCurrentUserId() userId: string,
  ): Promise<User> {
    return this.usersService.create(input);
  }

  @Mutation(() => User)
  @Permissions(Permission.ADMIN)
  async updateUser(
    @Args('id') id: string,
    @Args('input') input: UserUncheckedUpdateManyInput,
  ): Promise<User> {
    return this.usersService.update({ id, input });
  }

  @Mutation(() => Boolean)
  @Permissions(Permission.ADMIN)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.delete(id);
  }
}
