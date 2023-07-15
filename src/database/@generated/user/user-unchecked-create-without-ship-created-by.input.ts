import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipUncheckedCreateNestedManyWithoutUpdatedByInput } from '../ship/ship-unchecked-create-nested-many-without-updated-by.input';
import { ShipUncheckedCreateNestedManyWithoutDeletedByInput } from '../ship/ship-unchecked-create-nested-many-without-deleted-by.input';

@InputType()
export class UserUncheckedCreateWithoutShipCreatedByInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isDeleted?: boolean;

    @Field(() => ShipUncheckedCreateNestedManyWithoutUpdatedByInput, {nullable:true})
    shipUpdatedBy?: ShipUncheckedCreateNestedManyWithoutUpdatedByInput;

    @Field(() => ShipUncheckedCreateNestedManyWithoutDeletedByInput, {nullable:true})
    shipDeletedBy?: ShipUncheckedCreateNestedManyWithoutDeletedByInput;
}
