import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { Type } from 'class-transformer';
import { ShipUpdateWithoutUpdatedByInput } from './ship-update-without-updated-by.input';

@InputType()
export class ShipUpdateWithWhereUniqueWithoutUpdatedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipUpdateWithoutUpdatedByInput, { nullable: false })
  @Type(() => ShipUpdateWithoutUpdatedByInput)
  data!: ShipUpdateWithoutUpdatedByInput;
}
