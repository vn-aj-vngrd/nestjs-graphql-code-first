import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCreateWithoutDeletedByInput } from './ship-create-without-deleted-by.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@InputType()
export class ShipCreateOrConnectWithoutDeletedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipCreateWithoutDeletedByInput, { nullable: false })
  @Type(() => ShipCreateWithoutDeletedByInput)
  create!: ShipCreateWithoutDeletedByInput;
}
