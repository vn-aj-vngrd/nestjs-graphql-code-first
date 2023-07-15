import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class ShipUncheckedUpdateManyWithoutDeletedByInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  deletedAt?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  createdById?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  updatedById?: NullableStringFieldUpdateOperationsInput;

  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isDeleted?: BoolFieldUpdateOperationsInput;
}
