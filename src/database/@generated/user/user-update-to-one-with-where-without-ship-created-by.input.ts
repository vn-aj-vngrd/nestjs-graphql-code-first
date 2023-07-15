import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserUpdateWithoutShipCreatedByInput } from './user-update-without-ship-created-by.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutShipCreatedByInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutShipCreatedByInput, { nullable: false })
  @Type(() => UserUpdateWithoutShipCreatedByInput)
  data!: UserUpdateWithoutShipCreatedByInput;
}
