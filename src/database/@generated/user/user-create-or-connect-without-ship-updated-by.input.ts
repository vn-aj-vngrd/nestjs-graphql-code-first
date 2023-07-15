import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateWithoutShipUpdatedByInput } from './user-create-without-ship-updated-by.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutShipUpdatedByInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutShipUpdatedByInput, { nullable: false })
  @Type(() => UserCreateWithoutShipUpdatedByInput)
  create!: UserCreateWithoutShipUpdatedByInput;
}
