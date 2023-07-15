import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ShipCountOrderByAggregateInput } from './ship-count-order-by-aggregate.input';
import { ShipMaxOrderByAggregateInput } from './ship-max-order-by-aggregate.input';
import { ShipMinOrderByAggregateInput } from './ship-min-order-by-aggregate.input';

@InputType()
export class ShipOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  deletedAt?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  createdById?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  updatedById?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deletedById?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  isDeleted?: keyof typeof SortOrder;

  @Field(() => ShipCountOrderByAggregateInput, { nullable: true })
  _count?: ShipCountOrderByAggregateInput;

  @Field(() => ShipMaxOrderByAggregateInput, { nullable: true })
  _max?: ShipMaxOrderByAggregateInput;

  @Field(() => ShipMinOrderByAggregateInput, { nullable: true })
  _min?: ShipMinOrderByAggregateInput;
}
