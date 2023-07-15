import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipCreateManyDeletedByInput } from './ship-create-many-deleted-by.input';
import { Type } from 'class-transformer';

@InputType()
export class ShipCreateManyDeletedByInputEnvelope {

    @Field(() => [ShipCreateManyDeletedByInput], {nullable:false})
    @Type(() => ShipCreateManyDeletedByInput)
    data!: Array<ShipCreateManyDeletedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
