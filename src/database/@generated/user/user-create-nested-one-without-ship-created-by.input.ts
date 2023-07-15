import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutShipCreatedByInput } from './user-create-without-ship-created-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutShipCreatedByInput } from './user-create-or-connect-without-ship-created-by.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutShipCreatedByInput {
  @Field(() => UserCreateWithoutShipCreatedByInput, { nullable: true })
  @Type(() => UserCreateWithoutShipCreatedByInput)
  create?: UserCreateWithoutShipCreatedByInput;

  @Field(() => UserCreateOrConnectWithoutShipCreatedByInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutShipCreatedByInput)
  connectOrCreate?: UserCreateOrConnectWithoutShipCreatedByInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: UserWhereUniqueInput;
}
