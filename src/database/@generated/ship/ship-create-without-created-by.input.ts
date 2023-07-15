import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { UserCreateNestedOneWithoutShipDeletedByInput } from '../user/user-create-nested-one-without-ship-deleted-by.input';
import { UserCreateNestedOneWithoutShipUpdatedByInput } from '../user/user-create-nested-one-without-ship-updated-by.input';

@InputType()
export class ShipCreateWithoutCreatedByInput {
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

  @Field(() => Boolean, { nullable: true })
  isDeleted?: boolean;

  @Field(() => UserCreateNestedOneWithoutShipUpdatedByInput, { nullable: true })
  updatedBy?: UserCreateNestedOneWithoutShipUpdatedByInput;

  @Field(() => UserCreateNestedOneWithoutShipDeletedByInput, { nullable: true })
  deletedBy?: UserCreateNestedOneWithoutShipDeletedByInput;
}
