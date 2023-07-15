import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipCreateManyCreatedByInput } from './ship-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class ShipCreateManyCreatedByInputEnvelope {
  @Field(() => [ShipCreateManyCreatedByInput], { nullable: false })
  @Type(() => ShipCreateManyCreatedByInput)
  data!: Array<ShipCreateManyCreatedByInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
