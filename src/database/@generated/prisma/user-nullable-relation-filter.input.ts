import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from '../user/user-where.input';

@InputType()
export class UserNullableRelationFilter {

    @Field(() => UserWhereInput, {nullable:true})
    is?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    isNot?: UserWhereInput;
}
