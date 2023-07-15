import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCreateManyCreatedByInput } from './ship-create-many-created-by.input';

@InputType()
export class ShipCreateManyCreatedByInputEnvelope {
  @Field(() => [ShipCreateManyCreatedByInput], { nullable: false })
  @Type(() => ShipCreateManyCreatedByInput)
  data!: Array<ShipCreateManyCreatedByInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
