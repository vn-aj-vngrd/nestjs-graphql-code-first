import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ShipOrderByRelationAggregateInput } from '../ship/ship-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  deletedAt?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  isDeleted?: keyof typeof SortOrder;

  @Field(() => ShipOrderByRelationAggregateInput, { nullable: true })
  shipCreatedBy?: ShipOrderByRelationAggregateInput;

  @Field(() => ShipOrderByRelationAggregateInput, { nullable: true })
  shipUpdatedBy?: ShipOrderByRelationAggregateInput;

  @Field(() => ShipOrderByRelationAggregateInput, { nullable: true })
  shipDeletedBy?: ShipOrderByRelationAggregateInput;
}
