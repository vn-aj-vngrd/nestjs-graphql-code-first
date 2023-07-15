import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCreateManyUpdatedByInput } from './ship-create-many-updated-by.input';

@InputType()
export class ShipCreateManyUpdatedByInputEnvelope {
  @Field(() => [ShipCreateManyUpdatedByInput], { nullable: false })
  @Type(() => ShipCreateManyUpdatedByInput)
  data!: Array<ShipCreateManyUpdatedByInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
