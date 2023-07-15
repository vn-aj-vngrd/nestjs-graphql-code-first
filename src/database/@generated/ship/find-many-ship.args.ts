import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShipWhereInput } from './ship-where.input';
import { Type } from 'class-transformer';
import { ShipOrderByWithRelationInput } from './ship-order-by-with-relation.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShipScalarFieldEnum } from './ship-scalar-field.enum';

@ArgsType()
export class FindManyShipArgs {

    @Field(() => ShipWhereInput, {nullable:true})
    @Type(() => ShipWhereInput)
    where?: ShipWhereInput;

    @Field(() => [ShipOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShipOrderByWithRelationInput>;

    @Field(() => ShipWhereUniqueInput, {nullable:true})
    cursor?: ShipWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShipScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShipScalarFieldEnum>;
}
