import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserUpdateWithoutShipUpdatedByInput } from './user-update-without-ship-updated-by.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutShipUpdatedByInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => UserUpdateWithoutShipUpdatedByInput, { nullable: false })
  @Type(() => UserUpdateWithoutShipUpdatedByInput)
  data!: UserUpdateWithoutShipUpdatedByInput;
}
