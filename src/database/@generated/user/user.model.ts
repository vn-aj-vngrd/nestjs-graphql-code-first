import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Ship } from '../ship/ship.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => [Ship], {nullable:true})
    shipCreatedBy?: Array<Ship>;

    @Field(() => [Ship], {nullable:true})
    shipUpdatedBy?: Array<Ship>;

    @Field(() => [Ship], {nullable:true})
    shipDeletedBy?: Array<Ship>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
