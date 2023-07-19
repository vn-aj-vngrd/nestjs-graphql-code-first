import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Ship } from 'src/@generated/ship/ship.model';
import { ShipUncheckedCreateInput } from 'src/@generated/ship/ship-unchecked-create.input';
import { ShipUncheckedUpdateInput } from 'src/@generated/ship/ship-unchecked-update.input';
import { ParamArgs } from 'src/common/args';
import { CurrentUserId } from 'src/common/decorators/current-user.decorator';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { Permission } from 'src/common/types/permission.enum';

import { ShipResponse } from './responses/ship.response';
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

  @Mutation(() => ShipResponse)
  @Permissions(Permission.ADMIN)
  async createShip(
    @Args('input') input: ShipUncheckedCreateInput,
    @CurrentUserId() userId: string,
  ) {
    if (!input.createdById) {
      input.createdById = userId;
    }

    const data = await this.shipsService.create(input);

    return {
      message: 'Successfully created ship',
      user: data,
    };
  }

  @Mutation(() => ShipResponse)
  @Permissions(Permission.ADMIN)
  async updateShip(
    @Args('ids') ids: string,
    @Args('input') input: ShipUncheckedUpdateInput,
    @CurrentUserId() userId: string,
  ) {
    const idsArr = ids.split(',');

    if (!input.updatedById) {
      input.updatedById = userId as ShipUncheckedUpdateInput['updatedById'];
    }

    try {
      for (const id of idsArr) {
        await this.shipsService.update({ id, input, userId, action: 'UPDATE' });
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }

    const message =
      idsArr.length === 1
        ? `Successfully updated ship ${idsArr[0]}`
        : `Successfully updated ${idsArr.length} ships`;

    return {
      message,
    };
  }

  @Mutation(() => ShipResponse)
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
        ? `Successfully deleted ship ${idsArr[0]}`
        : `Successfully deleted ${idsArr.length} ships`;

    return {
      message,
    };
  }
}
