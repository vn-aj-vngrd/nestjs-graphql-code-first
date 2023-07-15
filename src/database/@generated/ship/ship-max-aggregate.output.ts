import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShipMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;

  @Field(() => String, { nullable: true })
  createdById?: string;

  @Field(() => String, { nullable: true })
  updatedById?: string;

  @Field(() => String, { nullable: true })
  deletedById?: string;

  @Field(() => Boolean, { nullable: true })
  isDeleted?: boolean;
}
