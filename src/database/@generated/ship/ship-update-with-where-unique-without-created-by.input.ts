import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipUpdateWithoutCreatedByInput } from './ship-update-without-created-by.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@InputType()
export class ShipUpdateWithWhereUniqueWithoutCreatedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipUpdateWithoutCreatedByInput, { nullable: false })
  @Type(() => ShipUpdateWithoutCreatedByInput)
  data!: ShipUpdateWithoutCreatedByInput;
}
