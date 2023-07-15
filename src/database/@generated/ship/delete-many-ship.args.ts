import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipWhereInput } from './ship-where.input';

@ArgsType()
export class DeleteManyShipArgs {
  @Field(() => ShipWhereInput, { nullable: true })
  @Type(() => ShipWhereInput)
  where?: ShipWhereInput;
}
