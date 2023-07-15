import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateWithoutShipDeletedByInput } from './user-create-without-ship-deleted-by.input';
import { UserUpdateWithoutShipDeletedByInput } from './user-update-without-ship-deleted-by.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutShipDeletedByInput {
  @Field(() => UserUpdateWithoutShipDeletedByInput, { nullable: false })
  @Type(() => UserUpdateWithoutShipDeletedByInput)
  update!: UserUpdateWithoutShipDeletedByInput;

  @Field(() => UserCreateWithoutShipDeletedByInput, { nullable: false })
  @Type(() => UserCreateWithoutShipDeletedByInput)
  create!: UserCreateWithoutShipDeletedByInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
