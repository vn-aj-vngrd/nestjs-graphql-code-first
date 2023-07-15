import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

import { ShipCountAggregate } from './ship-count-aggregate.output';
import { ShipMaxAggregate } from './ship-max-aggregate.output';
import { ShipMinAggregate } from './ship-min-aggregate.output';

@ObjectType()
export class AggregateShip {
  @Field(() => ShipCountAggregate, { nullable: true })
  _count?: ShipCountAggregate;

  @Field(() => ShipMinAggregate, { nullable: true })
  _min?: ShipMinAggregate;

  @Field(() => ShipMaxAggregate, { nullable: true })
  _max?: ShipMaxAggregate;
}
