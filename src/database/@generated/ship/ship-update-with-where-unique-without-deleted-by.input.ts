import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipUpdateWithoutDeletedByInput } from './ship-update-without-deleted-by.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@InputType()
export class ShipUpdateWithWhereUniqueWithoutDeletedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipUpdateWithoutDeletedByInput, { nullable: false })
  @Type(() => ShipUpdateWithoutDeletedByInput)
  data!: ShipUpdateWithoutDeletedByInput;
}
