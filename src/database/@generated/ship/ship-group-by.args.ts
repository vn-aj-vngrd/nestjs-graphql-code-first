import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCountAggregateInput } from './ship-count-aggregate.input';
import { ShipMaxAggregateInput } from './ship-max-aggregate.input';
import { ShipMinAggregateInput } from './ship-min-aggregate.input';
import { ShipOrderByWithAggregationInput } from './ship-order-by-with-aggregation.input';
import { ShipScalarFieldEnum } from './ship-scalar-field.enum';
import { ShipScalarWhereWithAggregatesInput } from './ship-scalar-where-with-aggregates.input';
import { ShipWhereInput } from './ship-where.input';

@ArgsType()
export class ShipGroupByArgs {
  @Field(() => ShipWhereInput, { nullable: true })
  @Type(() => ShipWhereInput)
  where?: ShipWhereInput;

  @Field(() => [ShipOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ShipOrderByWithAggregationInput>;

  @Field(() => [ShipScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ShipScalarFieldEnum>;

  @Field(() => ShipScalarWhereWithAggregatesInput, { nullable: true })
  having?: ShipScalarWhereWithAggregatesInput;

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
