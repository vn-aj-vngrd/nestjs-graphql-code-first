import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShipUncheckedCreateWithoutCreatedByInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;

  @Field(() => String, { nullable: true })
  updatedById?: string;

  @Field(() => String, { nullable: true })
  deletedById?: string;

  @Field(() => Boolean, { nullable: true })
  isDeleted?: boolean;
}
