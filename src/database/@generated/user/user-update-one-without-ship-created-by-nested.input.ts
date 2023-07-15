import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateOrConnectWithoutShipCreatedByInput } from './user-create-or-connect-without-ship-created-by.input';
import { UserCreateWithoutShipCreatedByInput } from './user-create-without-ship-created-by.input';
import { UserUpdateToOneWithWhereWithoutShipCreatedByInput } from './user-update-to-one-with-where-without-ship-created-by.input';
import { UserUpsertWithoutShipCreatedByInput } from './user-upsert-without-ship-created-by.input';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateOneWithoutShipCreatedByNestedInput {
  @Field(() => UserCreateWithoutShipCreatedByInput, { nullable: true })
  @Type(() => UserCreateWithoutShipCreatedByInput)
  create?: UserCreateWithoutShipCreatedByInput;

  @Field(() => UserCreateOrConnectWithoutShipCreatedByInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutShipCreatedByInput)
  connectOrCreate?: UserCreateOrConnectWithoutShipCreatedByInput;

  @Field(() => UserUpsertWithoutShipCreatedByInput, { nullable: true })
  @Type(() => UserUpsertWithoutShipCreatedByInput)
  upsert?: UserUpsertWithoutShipCreatedByInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  disconnect?: UserWhereInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  delete?: UserWhereInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: UserWhereUniqueInput;

  @Field(() => UserUpdateToOneWithWhereWithoutShipCreatedByInput, {
    nullable: true,
  })
  @Type(() => UserUpdateToOneWithWhereWithoutShipCreatedByInput)
  update?: UserUpdateToOneWithWhereWithoutShipCreatedByInput;
}
