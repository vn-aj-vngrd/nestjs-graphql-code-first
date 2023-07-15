import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutShipDeletedByInput } from './user-update-without-ship-deleted-by.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutShipDeletedByInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutShipDeletedByInput, {nullable:false})
    @Type(() => UserUpdateWithoutShipDeletedByInput)
    data!: UserUpdateWithoutShipDeletedByInput;
}
