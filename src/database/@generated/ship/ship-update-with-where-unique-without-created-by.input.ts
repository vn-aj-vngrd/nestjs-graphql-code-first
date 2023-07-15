import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { Type } from 'class-transformer';
import { ShipUpdateWithoutCreatedByInput } from './ship-update-without-created-by.input';

@InputType()
export class ShipUpdateWithWhereUniqueWithoutCreatedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipUpdateWithoutCreatedByInput, { nullable: false })
  @Type(() => ShipUpdateWithoutCreatedByInput)
  data!: ShipUpdateWithoutCreatedByInput;
}
