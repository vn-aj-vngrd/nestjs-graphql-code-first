import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { Type } from 'class-transformer';
import { ShipCreateWithoutCreatedByInput } from './ship-create-without-created-by.input';

@InputType()
export class ShipCreateOrConnectWithoutCreatedByInput {

    @Field(() => ShipWhereUniqueInput, {nullable:false})
    @Type(() => ShipWhereUniqueInput)
    where!: ShipWhereUniqueInput;

    @Field(() => ShipCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => ShipCreateWithoutCreatedByInput)
    create!: ShipCreateWithoutCreatedByInput;
}
