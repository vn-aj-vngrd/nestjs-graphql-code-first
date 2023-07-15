import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneWithoutShipCreatedByNestedInput } from '../user/user-update-one-without-ship-created-by-nested.input';
import { UserUpdateOneWithoutShipUpdatedByNestedInput } from '../user/user-update-one-without-ship-updated-by-nested.input';
import { UserUpdateOneWithoutShipDeletedByNestedInput } from '../user/user-update-one-without-ship-deleted-by-nested.input';

@InputType()
export class ShipUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isDeleted?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutShipCreatedByNestedInput, {nullable:true})
    createdBy?: UserUpdateOneWithoutShipCreatedByNestedInput;

    @Field(() => UserUpdateOneWithoutShipUpdatedByNestedInput, {nullable:true})
    updatedBy?: UserUpdateOneWithoutShipUpdatedByNestedInput;

    @Field(() => UserUpdateOneWithoutShipDeletedByNestedInput, {nullable:true})
    deletedBy?: UserUpdateOneWithoutShipDeletedByNestedInput;
}
