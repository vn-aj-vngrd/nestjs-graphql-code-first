import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutShipDeletedByInput } from './user-create-without-ship-deleted-by.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutShipDeletedByInput } from './user-create-or-connect-without-ship-deleted-by.input';
import { UserUpsertWithoutShipDeletedByInput } from './user-upsert-without-ship-deleted-by.input';
import { UserWhereInput } from './user-where.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutShipDeletedByInput } from './user-update-to-one-with-where-without-ship-deleted-by.input';

@InputType()
export class UserUpdateOneWithoutShipDeletedByNestedInput {

    @Field(() => UserCreateWithoutShipDeletedByInput, {nullable:true})
    @Type(() => UserCreateWithoutShipDeletedByInput)
    create?: UserCreateWithoutShipDeletedByInput;

    @Field(() => UserCreateOrConnectWithoutShipDeletedByInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutShipDeletedByInput)
    connectOrCreate?: UserCreateOrConnectWithoutShipDeletedByInput;

    @Field(() => UserUpsertWithoutShipDeletedByInput, {nullable:true})
    @Type(() => UserUpsertWithoutShipDeletedByInput)
    upsert?: UserUpsertWithoutShipDeletedByInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateToOneWithWhereWithoutShipDeletedByInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutShipDeletedByInput)
    update?: UserUpdateToOneWithWhereWithoutShipDeletedByInput;
}
