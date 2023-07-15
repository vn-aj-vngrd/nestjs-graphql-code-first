import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateWithoutShipUpdatedByInput } from './user-create-without-ship-updated-by.input';
import { UserUpdateWithoutShipUpdatedByInput } from './user-update-without-ship-updated-by.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutShipUpdatedByInput {
  @Field(() => UserUpdateWithoutShipUpdatedByInput, { nullable: false })
  @Type(() => UserUpdateWithoutShipUpdatedByInput)
  update!: UserUpdateWithoutShipUpdatedByInput;

  @Field(() => UserCreateWithoutShipUpdatedByInput, { nullable: false })
  @Type(() => UserCreateWithoutShipUpdatedByInput)
  create!: UserCreateWithoutShipUpdatedByInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
