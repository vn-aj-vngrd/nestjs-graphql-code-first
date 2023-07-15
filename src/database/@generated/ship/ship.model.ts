import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Ship {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:true})
    createdById!: string | null;

    @Field(() => String, {nullable:true})
    updatedById!: string | null;

    @Field(() => String, {nullable:true})
    deletedById!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDeleted!: boolean;

    @Field(() => User, {nullable:true})
    createdBy?: User | null;

    @Field(() => User, {nullable:true})
    updatedBy?: User | null;

    @Field(() => User, {nullable:true})
    deletedBy?: User | null;
}
