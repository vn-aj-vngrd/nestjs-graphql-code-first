import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ShipCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  deletedAt!: number;

  @Field(() => Int, { nullable: false })
  createdById!: number;

  @Field(() => Int, { nullable: false })
  updatedById!: number;

  @Field(() => Int, { nullable: false })
  deletedById!: number;

  @Field(() => Int, { nullable: false })
  isDeleted!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
