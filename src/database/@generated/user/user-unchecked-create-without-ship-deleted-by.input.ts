import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { ShipUncheckedCreateNestedManyWithoutCreatedByInput } from '../ship/ship-unchecked-create-nested-many-without-created-by.input';
import { ShipUncheckedCreateNestedManyWithoutUpdatedByInput } from '../ship/ship-unchecked-create-nested-many-without-updated-by.input';

@InputType()
export class UserUncheckedCreateWithoutShipDeletedByInput {
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

  @Field(() => ShipUncheckedCreateNestedManyWithoutCreatedByInput, {
    nullable: true,
  })
  shipCreatedBy?: ShipUncheckedCreateNestedManyWithoutCreatedByInput;

  @Field(() => ShipUncheckedCreateNestedManyWithoutUpdatedByInput, {
    nullable: true,
  })
  shipUpdatedBy?: ShipUncheckedCreateNestedManyWithoutUpdatedByInput;
}
