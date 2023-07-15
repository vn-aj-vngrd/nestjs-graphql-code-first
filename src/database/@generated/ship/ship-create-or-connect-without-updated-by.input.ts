import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCreateWithoutUpdatedByInput } from './ship-create-without-updated-by.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@InputType()
export class ShipCreateOrConnectWithoutUpdatedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipCreateWithoutUpdatedByInput, { nullable: false })
  @Type(() => ShipCreateWithoutUpdatedByInput)
  create!: ShipCreateWithoutUpdatedByInput;
}
