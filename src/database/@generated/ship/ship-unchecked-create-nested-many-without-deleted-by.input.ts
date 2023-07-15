import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { ShipCreateManyDeletedByInputEnvelope } from './ship-create-many-deleted-by-input-envelope.input';
import { ShipCreateOrConnectWithoutDeletedByInput } from './ship-create-or-connect-without-deleted-by.input';
import { ShipCreateWithoutDeletedByInput } from './ship-create-without-deleted-by.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';

@InputType()
export class ShipUncheckedCreateNestedManyWithoutDeletedByInput {
  @Field(() => [ShipCreateWithoutDeletedByInput], { nullable: true })
  @Type(() => ShipCreateWithoutDeletedByInput)
  create?: Array<ShipCreateWithoutDeletedByInput>;

  @Field(() => [ShipCreateOrConnectWithoutDeletedByInput], { nullable: true })
  @Type(() => ShipCreateOrConnectWithoutDeletedByInput)
  connectOrCreate?: Array<ShipCreateOrConnectWithoutDeletedByInput>;

  @Field(() => ShipCreateManyDeletedByInputEnvelope, { nullable: true })
  @Type(() => ShipCreateManyDeletedByInputEnvelope)
  createMany?: ShipCreateManyDeletedByInputEnvelope;

  @Field(() => [ShipWhereUniqueInput], { nullable: true })
  @Type(() => ShipWhereUniqueInput)
  connect?: Array<ShipWhereUniqueInput>;
}
