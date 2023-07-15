import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ShipMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deletedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdById?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedById?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deletedById?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  isDeleted?: keyof typeof SortOrder;
}
