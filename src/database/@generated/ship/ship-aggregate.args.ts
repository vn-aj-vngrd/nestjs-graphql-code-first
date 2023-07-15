import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCountAggregateInput } from './ship-count-aggregate.input';
import { ShipMaxAggregateInput } from './ship-max-aggregate.input';
import { ShipMinAggregateInput } from './ship-min-aggregate.input';
import { ShipOrderByWithRelationInput } from './ship-order-by-with-relation.input';
import { ShipWhereInput } from './ship-where.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@ArgsType()
export class ShipAggregateArgs {
  @Field(() => ShipWhereInput, { nullable: true })
  @Type(() => ShipWhereInput)
  where?: ShipWhereInput;

  @Field(() => [ShipOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ShipOrderByWithRelationInput>;

  @Field(() => ShipWhereUniqueInput, { nullable: true })
  cursor?: ShipWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => ShipCountAggregateInput, { nullable: true })
  _count?: ShipCountAggregateInput;

  @Field(() => ShipMinAggregateInput, { nullable: true })
  _min?: ShipMinAggregateInput;

  @Field(() => ShipMaxAggregateInput, { nullable: true })
  _max?: ShipMaxAggregateInput;
}
