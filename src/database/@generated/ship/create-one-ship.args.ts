import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCreateInput } from './ship-create.input';

@ArgsType()
export class CreateOneShipArgs {
  @Field(() => ShipCreateInput, { nullable: false })
  @Type(() => ShipCreateInput)
  data!: ShipCreateInput;
}
