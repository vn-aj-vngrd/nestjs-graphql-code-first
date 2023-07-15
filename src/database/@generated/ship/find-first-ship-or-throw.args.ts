import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipOrderByWithRelationInput } from './ship-order-by-with-relation.input';
import { ShipScalarFieldEnum } from './ship-scalar-field.enum';
import { ShipWhereInput } from './ship-where.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@ArgsType()
export class FindFirstShipOrThrowArgs {
  @Field(() => ShipWhereInput, { nullable: true })
  @Type(() => ShipWhereInput)
  where?: ShipWhereInput;

  @Field(() => [ShipOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ShipOrderByWithRelationInput>;

  @Field(() => ShipWhereUniqueInput, { nullable: true })
  cursor?: ShipWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [ShipScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ShipScalarFieldEnum>;
}
