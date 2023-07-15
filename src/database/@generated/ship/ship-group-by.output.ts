import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShipCountAggregate } from './ship-count-aggregate.output';
import { ShipMinAggregate } from './ship-min-aggregate.output';
import { ShipMaxAggregate } from './ship-max-aggregate.output';

@ObjectType()
export class ShipGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    createdById?: string;

    @Field(() => String, {nullable:true})
    updatedById?: string;

    @Field(() => String, {nullable:true})
    deletedById?: string;

    @Field(() => Boolean, {nullable:false})
    isDeleted!: boolean;

    @Field(() => ShipCountAggregate, {nullable:true})
    _count?: ShipCountAggregate;

    @Field(() => ShipMinAggregate, {nullable:true})
    _min?: ShipMinAggregate;

    @Field(() => ShipMaxAggregate, {nullable:true})
    _max?: ShipMaxAggregate;
}
