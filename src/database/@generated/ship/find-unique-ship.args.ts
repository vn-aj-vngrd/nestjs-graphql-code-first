import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipWhereUniqueInput } from './ship-where-unique.input';

@ArgsType()
export class FindUniqueShipArgs {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;
}
