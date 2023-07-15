import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { Type } from 'class-transformer';
import { ShipUpdateWithoutUpdatedByInput } from './ship-update-without-updated-by.input';
import { ShipCreateWithoutUpdatedByInput } from './ship-create-without-updated-by.input';

@InputType()
export class ShipUpsertWithWhereUniqueWithoutUpdatedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipUpdateWithoutUpdatedByInput, { nullable: false })
  @Type(() => ShipUpdateWithoutUpdatedByInput)
  update!: ShipUpdateWithoutUpdatedByInput;

  @Field(() => ShipCreateWithoutUpdatedByInput, { nullable: false })
  @Type(() => ShipCreateWithoutUpdatedByInput)
  create!: ShipCreateWithoutUpdatedByInput;
}
