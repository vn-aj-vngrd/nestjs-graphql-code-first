import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ShipScalarWhereWithAggregatesInput {
  @Field(() => [ShipScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ShipScalarWhereWithAggregatesInput>;

  @Field(() => [ShipScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ShipScalarWhereWithAggregatesInput>;

  @Field(() => [ShipScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ShipScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  deletedAt?: DateTimeNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  createdById?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  updatedById?: StringNullableWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  deletedById?: StringNullableWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isDeleted?: BoolWithAggregatesFilter;
}
