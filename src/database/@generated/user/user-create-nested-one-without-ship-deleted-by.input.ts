import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutShipDeletedByInput } from './user-create-without-ship-deleted-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutShipDeletedByInput } from './user-create-or-connect-without-ship-deleted-by.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutShipDeletedByInput {

    @Field(() => UserCreateWithoutShipDeletedByInput, {nullable:true})
    @Type(() => UserCreateWithoutShipDeletedByInput)
    create?: UserCreateWithoutShipDeletedByInput;

    @Field(() => UserCreateOrConnectWithoutShipDeletedByInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutShipDeletedByInput)
    connectOrCreate?: UserCreateOrConnectWithoutShipDeletedByInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
