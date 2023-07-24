import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated/user/user.model';
import { UserCreateManyInput } from 'src/@generated/user/user-create-many.input';
import { UserUncheckedUpdateManyInput } from 'src/@generated/user/user-unchecked-update-many.input';
import { ParamArgs } from 'src/common/args';
import { CurrentUserId } from 'src/common/decorators/current-userId.decorator';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { Permission } from 'src/common/types/permission.enum';

import { UsersService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  @Permissions(Permission.ADMIN)
  async user(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Query(() => [User])
  @Permissions(Permission.ADMIN)
  users(@Args() args: ParamArgs) {
    return this.usersService.findAll(args);
  }

  @Mutation(() => String)
  @Permissions(Permission.ADMIN)
  async createUser(
    @Args('input') input: UserCreateManyInput,
    @CurrentUserId() userId: string,
  ) {
    if (!input.createdById) {
      input.createdById = userId;
    }

    await this.usersService.create(input);

    const message = 'Successfully created user';

    return message;
  }

  @Mutation(() => String)
  @Permissions(Permission.ADMIN)
  async updateUser(
    @Args('ids') ids: string,
    @Args('input') input: UserUncheckedUpdateManyInput,
    @CurrentUserId() userId: string,
  ) {
    const idsArr = ids.split(',');
    let action: 'UPDATE' | 'SOFT_DELETE' = 'UPDATE';

    if (input.isDeleted) {
      action = 'SOFT_DELETE';
    }

    if (!input.updatedById) {
      input.updatedById = userId as UserUncheckedUpdateManyInput['updatedById'];
    }

    try {
      for (const id of idsArr) {
        await this.usersService.update({ id, input, userId, action });
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }

    const _action = `${action
      .replace(/_/g, ' ')
      .toLowerCase()
      .split(' ')
      .join(' ')}`;
    const message =
      idsArr.length === 1
        ? `Successfully ${_action} user (${idsArr[0]})`
        : `Successfully ${_action} ${idsArr.length} users`;

    return message;
  }

  @Mutation(() => String)
  @Permissions(Permission.ADMIN)
  async deleteUser(@Args('ids') ids: string, @CurrentUserId() userId: string) {
    const idsArr = ids.split(',');

    try {
      for (const id of idsArr) {
        await this.usersService.delete(id, userId);
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }

    const message =
      idsArr.length === 1
        ? `Successfully deleted user (${idsArr[0]})`
        : `Successfully deleted ${idsArr.length} users`;

    return message;
  }
}
