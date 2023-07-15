import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateOrConnectWithoutShipUpdatedByInput } from './user-create-or-connect-without-ship-updated-by.input';
import { UserCreateWithoutShipUpdatedByInput } from './user-create-without-ship-updated-by.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutShipUpdatedByInput {
  @Field(() => UserCreateWithoutShipUpdatedByInput, { nullable: true })
  @Type(() => UserCreateWithoutShipUpdatedByInput)
  create?: UserCreateWithoutShipUpdatedByInput;

  @Field(() => UserCreateOrConnectWithoutShipUpdatedByInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutShipUpdatedByInput)
  connectOrCreate?: UserCreateOrConnectWithoutShipUpdatedByInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: UserWhereUniqueInput;
}
