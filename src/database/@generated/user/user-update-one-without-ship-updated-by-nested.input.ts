import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutShipUpdatedByInput } from './user-create-without-ship-updated-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutShipUpdatedByInput } from './user-create-or-connect-without-ship-updated-by.input';
import { UserUpsertWithoutShipUpdatedByInput } from './user-upsert-without-ship-updated-by.input';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutShipUpdatedByInput } from './user-update-to-one-with-where-without-ship-updated-by.input';

@InputType()
export class UserUpdateOneWithoutShipUpdatedByNestedInput {

    @Field(() => UserCreateWithoutShipUpdatedByInput, {nullable:true})
    @Type(() => UserCreateWithoutShipUpdatedByInput)
    create?: UserCreateWithoutShipUpdatedByInput;

    @Field(() => UserCreateOrConnectWithoutShipUpdatedByInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutShipUpdatedByInput)
    connectOrCreate?: UserCreateOrConnectWithoutShipUpdatedByInput;

    @Field(() => UserUpsertWithoutShipUpdatedByInput, {nullable:true})
    @Type(() => UserUpsertWithoutShipUpdatedByInput)
    upsert?: UserUpsertWithoutShipUpdatedByInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateToOneWithWhereWithoutShipUpdatedByInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutShipUpdatedByInput)
    update?: UserUpdateToOneWithWhereWithoutShipUpdatedByInput;
}
