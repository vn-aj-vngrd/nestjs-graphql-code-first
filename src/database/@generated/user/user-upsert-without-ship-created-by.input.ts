import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateWithoutShipCreatedByInput } from './user-create-without-ship-created-by.input';
import { UserUpdateWithoutShipCreatedByInput } from './user-update-without-ship-created-by.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutShipCreatedByInput {
  @Field(() => UserUpdateWithoutShipCreatedByInput, { nullable: false })
  @Type(() => UserUpdateWithoutShipCreatedByInput)
  update!: UserUpdateWithoutShipCreatedByInput;

  @Field(() => UserCreateWithoutShipCreatedByInput, { nullable: false })
  @Type(() => UserCreateWithoutShipCreatedByInput)
  create!: UserCreateWithoutShipCreatedByInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
