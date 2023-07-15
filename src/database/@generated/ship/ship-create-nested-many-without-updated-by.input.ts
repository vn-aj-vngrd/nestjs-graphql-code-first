import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCreateManyUpdatedByInputEnvelope } from './ship-create-many-updated-by-input-envelope.input';
import { ShipCreateOrConnectWithoutUpdatedByInput } from './ship-create-or-connect-without-updated-by.input';
import { ShipCreateWithoutUpdatedByInput } from './ship-create-without-updated-by.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@InputType()
export class ShipCreateNestedManyWithoutUpdatedByInput {
  @Field(() => [ShipCreateWithoutUpdatedByInput], { nullable: true })
  @Type(() => ShipCreateWithoutUpdatedByInput)
  create?: Array<ShipCreateWithoutUpdatedByInput>;

  @Field(() => [ShipCreateOrConnectWithoutUpdatedByInput], { nullable: true })
  @Type(() => ShipCreateOrConnectWithoutUpdatedByInput)
  connectOrCreate?: Array<ShipCreateOrConnectWithoutUpdatedByInput>;

  @Field(() => ShipCreateManyUpdatedByInputEnvelope, { nullable: true })
  @Type(() => ShipCreateManyUpdatedByInputEnvelope)
  createMany?: ShipCreateManyUpdatedByInputEnvelope;

  @Field(() => [ShipWhereUniqueInput], { nullable: true })
  @Type(() => ShipWhereUniqueInput)
  connect?: Array<ShipWhereUniqueInput>;
}
