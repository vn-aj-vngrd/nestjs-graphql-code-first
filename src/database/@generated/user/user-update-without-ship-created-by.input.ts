import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ShipUpdateManyWithoutUpdatedByNestedInput } from '../ship/ship-update-many-without-updated-by-nested.input';
import { ShipUpdateManyWithoutDeletedByNestedInput } from '../ship/ship-update-many-without-deleted-by-nested.input';

@InputType()
export class UserUpdateWithoutShipCreatedByInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isDeleted?: BoolFieldUpdateOperationsInput;

  @Field(() => ShipUpdateManyWithoutUpdatedByNestedInput, { nullable: true })
  shipUpdatedBy?: ShipUpdateManyWithoutUpdatedByNestedInput;

  @Field(() => ShipUpdateManyWithoutDeletedByNestedInput, { nullable: true })
  shipDeletedBy?: ShipUpdateManyWithoutDeletedByNestedInput;
}