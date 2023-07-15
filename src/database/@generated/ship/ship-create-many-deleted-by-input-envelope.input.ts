import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCreateManyDeletedByInput } from './ship-create-many-deleted-by.input';

@InputType()
export class ShipCreateManyDeletedByInputEnvelope {
  @Field(() => [ShipCreateManyDeletedByInput], { nullable: false })
  @Type(() => ShipCreateManyDeletedByInput)
  data!: Array<ShipCreateManyDeletedByInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
