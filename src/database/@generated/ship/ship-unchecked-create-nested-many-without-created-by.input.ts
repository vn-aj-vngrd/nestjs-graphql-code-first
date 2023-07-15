import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipCreateWithoutCreatedByInput } from './ship-create-without-created-by.input';
import { Type } from 'class-transformer';
import { ShipCreateOrConnectWithoutCreatedByInput } from './ship-create-or-connect-without-created-by.input';
import { ShipCreateManyCreatedByInputEnvelope } from './ship-create-many-created-by-input-envelope.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@InputType()
export class ShipUncheckedCreateNestedManyWithoutCreatedByInput {

    @Field(() => [ShipCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => ShipCreateWithoutCreatedByInput)
    create?: Array<ShipCreateWithoutCreatedByInput>;

    @Field(() => [ShipCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => ShipCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<ShipCreateOrConnectWithoutCreatedByInput>;

    @Field(() => ShipCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => ShipCreateManyCreatedByInputEnvelope)
    createMany?: ShipCreateManyCreatedByInputEnvelope;

    @Field(() => [ShipWhereUniqueInput], {nullable:true})
    @Type(() => ShipWhereUniqueInput)
    connect?: Array<ShipWhereUniqueInput>;
}
