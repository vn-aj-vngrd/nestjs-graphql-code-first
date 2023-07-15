import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserNullableRelationFilter } from '../prisma/user-nullable-relation-filter.input';

@InputType()
export class ShipWhereInput {
  @Field(() => [ShipWhereInput], { nullable: true })
  AND?: Array<ShipWhereInput>;

  @Field(() => [ShipWhereInput], { nullable: true })
  OR?: Array<ShipWhereInput>;

  @Field(() => [ShipWhereInput], { nullable: true })
  NOT?: Array<ShipWhereInput>;

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

  @Field(() => UserNullableRelationFilter, { nullable: true })
  createdBy?: UserNullableRelationFilter;

  @Field(() => UserNullableRelationFilter, { nullable: true })
  updatedBy?: UserNullableRelationFilter;

  @Field(() => UserNullableRelationFilter, { nullable: true })
  deletedBy?: UserNullableRelationFilter;
}
