import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutShipDeletedByInput } from './user-create-without-ship-deleted-by.input';

@InputType()
export class UserCreateOrConnectWithoutShipDeletedByInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutShipDeletedByInput, { nullable: false })
  @Type(() => UserCreateWithoutShipDeletedByInput)
  create!: UserCreateWithoutShipDeletedByInput;
}
