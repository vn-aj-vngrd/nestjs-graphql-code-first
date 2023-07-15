import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipScalarWhereInput } from './ship-scalar-where.input';
import { Type } from 'class-transformer';
import { ShipUpdateManyMutationInput } from './ship-update-many-mutation.input';

@InputType()
export class ShipUpdateManyWithWhereWithoutUpdatedByInput {

    @Field(() => ShipScalarWhereInput, {nullable:false})
    @Type(() => ShipScalarWhereInput)
    where!: ShipScalarWhereInput;

    @Field(() => ShipUpdateManyMutationInput, {nullable:false})
    @Type(() => ShipUpdateManyMutationInput)
    data!: ShipUpdateManyMutationInput;
}
