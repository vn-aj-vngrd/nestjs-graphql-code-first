import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { Type } from 'class-transformer';
import { ShipUpdateWithoutCreatedByInput } from './ship-update-without-created-by.input';
import { ShipCreateWithoutCreatedByInput } from './ship-create-without-created-by.input';

@InputType()
export class ShipUpsertWithWhereUniqueWithoutCreatedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipUpdateWithoutCreatedByInput, { nullable: false })
  @Type(() => ShipUpdateWithoutCreatedByInput)
  update!: ShipUpdateWithoutCreatedByInput;

  @Field(() => ShipCreateWithoutCreatedByInput, { nullable: false })
  @Type(() => ShipCreateWithoutCreatedByInput)
  create!: ShipCreateWithoutCreatedByInput;
}
