import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipWhereInput } from './ship-where.input';

@InputType()
export class ShipListRelationFilter {
  @Field(() => ShipWhereInput, { nullable: true })
  every?: ShipWhereInput;

  @Field(() => ShipWhereInput, { nullable: true })
  some?: ShipWhereInput;

  @Field(() => ShipWhereInput, { nullable: true })
  none?: ShipWhereInput;
}
