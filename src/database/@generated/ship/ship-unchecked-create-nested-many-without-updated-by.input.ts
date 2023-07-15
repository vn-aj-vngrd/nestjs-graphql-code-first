import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipCreateWithoutUpdatedByInput } from './ship-create-without-updated-by.input';
import { Type } from 'class-transformer';
import { ShipCreateOrConnectWithoutUpdatedByInput } from './ship-create-or-connect-without-updated-by.input';
import { ShipCreateManyUpdatedByInputEnvelope } from './ship-create-many-updated-by-input-envelope.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@InputType()
export class ShipUncheckedCreateNestedManyWithoutUpdatedByInput {

    @Field(() => [ShipCreateWithoutUpdatedByInput], {nullable:true})
    @Type(() => ShipCreateWithoutUpdatedByInput)
    create?: Array<ShipCreateWithoutUpdatedByInput>;

    @Field(() => [ShipCreateOrConnectWithoutUpdatedByInput], {nullable:true})
    @Type(() => ShipCreateOrConnectWithoutUpdatedByInput)
    connectOrCreate?: Array<ShipCreateOrConnectWithoutUpdatedByInput>;

    @Field(() => ShipCreateManyUpdatedByInputEnvelope, {nullable:true})
    @Type(() => ShipCreateManyUpdatedByInputEnvelope)
    createMany?: ShipCreateManyUpdatedByInputEnvelope;

    @Field(() => [ShipWhereUniqueInput], {nullable:true})
    @Type(() => ShipWhereUniqueInput)
    connect?: Array<ShipWhereUniqueInput>;
}
