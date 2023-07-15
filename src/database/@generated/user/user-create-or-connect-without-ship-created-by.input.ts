import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutShipCreatedByInput } from './user-create-without-ship-created-by.input';

@InputType()
export class UserCreateOrConnectWithoutShipCreatedByInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutShipCreatedByInput, {nullable:false})
    @Type(() => UserCreateWithoutShipCreatedByInput)
    create!: UserCreateWithoutShipCreatedByInput;
}
