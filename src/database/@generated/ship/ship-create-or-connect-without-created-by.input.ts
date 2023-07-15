import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCreateWithoutCreatedByInput } from './ship-create-without-created-by.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@InputType()
export class ShipCreateOrConnectWithoutCreatedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipCreateWithoutCreatedByInput, { nullable: false })
  @Type(() => ShipCreateWithoutCreatedByInput)
  create!: ShipCreateWithoutCreatedByInput;
}
