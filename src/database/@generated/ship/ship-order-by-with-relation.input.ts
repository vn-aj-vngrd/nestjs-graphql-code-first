import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ShipOrderByWithRelationInput {
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

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  createdBy?: UserOrderByWithRelationInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  updatedBy?: UserOrderByWithRelationInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  deletedBy?: UserOrderByWithRelationInput;
}
