import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { Type } from 'class-transformer';
import { ShipUpdateWithoutDeletedByInput } from './ship-update-without-deleted-by.input';

@InputType()
export class ShipUpdateWithWhereUniqueWithoutDeletedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipUpdateWithoutDeletedByInput, { nullable: false })
  @Type(() => ShipUpdateWithoutDeletedByInput)
  data!: ShipUpdateWithoutDeletedByInput;
}
