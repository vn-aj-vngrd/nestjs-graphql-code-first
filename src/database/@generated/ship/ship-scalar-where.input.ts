import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ShipScalarWhereInput {
  @Field(() => [ShipScalarWhereInput], { nullable: true })
  AND?: Array<ShipScalarWhereInput>;

  @Field(() => [ShipScalarWhereInput], { nullable: true })
  OR?: Array<ShipScalarWhereInput>;

  @Field(() => [ShipScalarWhereInput], { nullable: true })
  NOT?: Array<ShipScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  deletedAt?: DateTimeNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  createdById?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  updatedById?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  deletedById?: StringNullableFilter;

  @Field(() => BoolFilter, { nullable: true })
  isDeleted?: BoolFilter;
}
