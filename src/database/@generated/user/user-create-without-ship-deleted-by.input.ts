import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { ShipCreateNestedManyWithoutCreatedByInput } from '../ship/ship-create-nested-many-without-created-by.input';
import { ShipCreateNestedManyWithoutUpdatedByInput } from '../ship/ship-create-nested-many-without-updated-by.input';

@InputType()
export class UserCreateWithoutShipDeletedByInput {
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

  @Field(() => ShipCreateNestedManyWithoutCreatedByInput, { nullable: true })
  shipCreatedBy?: ShipCreateNestedManyWithoutCreatedByInput;

  @Field(() => ShipCreateNestedManyWithoutUpdatedByInput, { nullable: true })
  shipUpdatedBy?: ShipCreateNestedManyWithoutUpdatedByInput;
}
