import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ship } from 'src/@generated/ship/ship.model';
import { ShipUncheckedCreateInput } from 'src/@generated/ship/ship-unchecked-create.input';
import { ShipUncheckedUpdateInput } from 'src/@generated/ship/ship-unchecked-update.input';
import { ParamArgs } from 'src/common/args';
import { CurrentUserId } from 'src/common/decorators/current-userId.decorator';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { Permission } from 'src/common/types/permission.enum';

import { ShipsService } from './ships.service';

@Resolver(() => Ship)
export class ShipsResolver {
  constructor(private readonly shipsService: ShipsService) {}

  @Query(() => Ship)
  @Permissions(Permission.ADMIN)
  async ship(@Args('id') id: string) {
    return this.shipsService.findOne(id);
  }

  @Query(() => [Ship])
  @Permissions(Permission.ADMIN)
  ships(@Args() args: ParamArgs) {
    return this.shipsService.findAll(args);
  }

  @Mutation(() => String)
  @Permissions(Permission.ADMIN)
  async createShip(
    @Args('input') input: ShipUncheckedCreateInput,
    @CurrentUserId() userId: string,
  ) {
    if (!input.createdById) {
      input.createdById = userId;
    }

    await this.shipsService.create(input);

    const message = 'Successfully created ship';

    return message;
  }

  @Mutation(() => String)
  @Permissions(Permission.ADMIN)
  async updateShip(
    @Args('ids') ids: string,
    @Args('input') input: ShipUncheckedUpdateInput,
    @CurrentUserId() userId: string,
  ) {
    const idsArr = ids.split(',');
    let action: 'UPDATE' | 'SOFT_DELETE' = 'UPDATE';

    if (input.isDeleted) {
      action = 'SOFT_DELETE';
    }

    if (!input.updatedById) {
      input.updatedById = userId as ShipUncheckedUpdateInput['updatedById'];
    }

    try {
      for (const id of idsArr) {
        await this.shipsService.update({ id, input, userId, action });
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
        ? `Successfully ${_action} ship (${idsArr[0]})`
        : `Successfully ${_action} ${idsArr.length} ships`;

    return message;
  }

  @Mutation(() => String)
  @Permissions(Permission.ADMIN)
  async deleteShip(@Args('ids') ids: string, @CurrentUserId() userId: string) {
    const idsArr = ids.split(',');

    try {
      for (const id of idsArr) {
        await this.shipsService.delete(id, userId);
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }

    const message =
      idsArr.length === 1
        ? `Successfully deleted ship (${idsArr[0]})`
        : `Successfully deleted ${idsArr.length} ships`;

    return message;
  }
}
