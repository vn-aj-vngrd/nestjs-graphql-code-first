import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ParamArgs } from 'src/common/args';
import { Ship } from 'src/database/@generated/ship/ship.model';
import { ShipCreateInput } from 'src/database/@generated/ship/ship-create.input';
import { ShipUpdateInput } from 'src/database/@generated/ship/ship-update.input';

import { ShipsService } from './ships.service';
import { ShipWithUser } from './ships.types';

const pubSub = new PubSub();

@Resolver(() => Ship)
export class ShipsResolver {
  constructor(private readonly shipsService: ShipsService) {}

  @Query(() => Ship)
  async ship(@Args('id') id: string): Promise<ShipWithUser> {
    const ship = await this.shipsService.findOne(id);
    if (!ship) {
      throw new NotFoundException(id);
    }
    return ship;
  }

  @Query(() => [Ship])
  ships(@Args() args: ParamArgs): Promise<ShipWithUser[]> {
    return this.shipsService.findAll(args);
  }

  @Mutation(() => Ship)
  async addShip(@Args('input') input: ShipCreateInput): Promise<ShipWithUser> {
    const ship = await this.shipsService.create(input);

    pubSub.publish('shipAdded', { shipAdded: ship });
    return ship;
  }

  @Mutation(() => Ship)
  async editShip(@Args('input') input: ShipUpdateInput): Promise<ShipWithUser> {
    const ship = await this.shipsService.update(input);

    pubSub.publish('shipEdited', { shipEdited: ship });
    return ship;
  }

  @Mutation(() => Boolean)
  async removeShip(@Args('id') id: string) {
    return this.shipsService.delete(id);
  }

  @Subscription(() => Ship)
  shipAdded() {
    return pubSub.asyncIterator(['shipAdded', 'shipEdited']);
  }
}
