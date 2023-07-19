import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Ship } from 'src/@generated/ship/ship.model';
import { ShipCreateInput } from 'src/@generated/ship/ship-create.input';
import { ShipUncheckedUpdateInput } from 'src/@generated/ship/ship-unchecked-update.input';
import { ParamArgs } from 'src/common/args';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { Permission } from 'src/common/types/permission.enum';

import { ShipsService } from './ships.service';
import { ShipWithUser } from './ships.type';

const pubSub = new PubSub();

@Resolver(() => Ship)
export class ShipsResolver {
  constructor(private readonly shipsService: ShipsService) {}

  @Query(() => Ship)
  @Permissions(Permission.ADMIN)
  async ship(@Args('id') id: string): Promise<ShipWithUser> {
    const ship = await this.shipsService.findOne(id);
    if (!ship) {
      throw new NotFoundException(id);
    }
    return ship;
  }

  @Query(() => [Ship])
  @Permissions(Permission.ADMIN)
  ships(@Args() args: ParamArgs): Promise<ShipWithUser[]> {
    return this.shipsService.findAll(args);
  }

  @Mutation(() => Ship)
  @Permissions(Permission.ADMIN)
  async createShip(
    @Args('input') input: ShipCreateInput,
  ): Promise<ShipWithUser> {
    const ship = await this.shipsService.create(input);

    pubSub.publish('shipCreated', { shipCreated: ship });
    return ship;
  }

  @Mutation(() => Ship)
  @Permissions(Permission.ADMIN)
  async updateShip(
    @Args('id') id: string,
    @Args('input') input: ShipUncheckedUpdateInput,
  ): Promise<ShipWithUser> {
    const ship = await this.shipsService.update({ id, input });

    pubSub.publish('shipUpdated', { shipUpdated: ship });
    return ship;
  }

  @Mutation(() => Boolean)
  @Permissions(Permission.ADMIN)
  async deleteShip(@Args('id') id: string) {
    return this.shipsService.delete(id);
  }
}
