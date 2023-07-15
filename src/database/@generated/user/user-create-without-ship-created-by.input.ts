import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { ShipCreateNestedManyWithoutDeletedByInput } from '../ship/ship-create-nested-many-without-deleted-by.input';
import { ShipCreateNestedManyWithoutUpdatedByInput } from '../ship/ship-create-nested-many-without-updated-by.input';

@InputType()
export class UserCreateWithoutShipCreatedByInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  username!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date | string;

  @Field(() => Boolean, { nullable: true })
  isDeleted?: boolean;

  @Field(() => ShipCreateNestedManyWithoutUpdatedByInput, { nullable: true })
  shipUpdatedBy?: ShipCreateNestedManyWithoutUpdatedByInput;

  @Field(() => ShipCreateNestedManyWithoutDeletedByInput, { nullable: true })
  shipDeletedBy?: ShipCreateNestedManyWithoutDeletedByInput;
}
