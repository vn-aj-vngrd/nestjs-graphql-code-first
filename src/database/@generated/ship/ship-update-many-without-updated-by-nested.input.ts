import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipCreateWithoutUpdatedByInput } from './ship-create-without-updated-by.input';
import { Type } from 'class-transformer';
import { ShipCreateOrConnectWithoutUpdatedByInput } from './ship-create-or-connect-without-updated-by.input';
import { ShipUpsertWithWhereUniqueWithoutUpdatedByInput } from './ship-upsert-with-where-unique-without-updated-by.input';
import { ShipCreateManyUpdatedByInputEnvelope } from './ship-create-many-updated-by-input-envelope.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { ShipUpdateWithWhereUniqueWithoutUpdatedByInput } from './ship-update-with-where-unique-without-updated-by.input';
import { ShipUpdateManyWithWhereWithoutUpdatedByInput } from './ship-update-many-with-where-without-updated-by.input';
import { ShipScalarWhereInput } from './ship-scalar-where.input';

@InputType()
export class ShipUpdateManyWithoutUpdatedByNestedInput {
  @Field(() => [ShipCreateWithoutUpdatedByInput], { nullable: true })
  @Type(() => ShipCreateWithoutUpdatedByInput)
  create?: Array<ShipCreateWithoutUpdatedByInput>;

  @Field(() => [ShipCreateOrConnectWithoutUpdatedByInput], { nullable: true })
  @Type(() => ShipCreateOrConnectWithoutUpdatedByInput)
  connectOrCreate?: Array<ShipCreateOrConnectWithoutUpdatedByInput>;

  @Field(() => [ShipUpsertWithWhereUniqueWithoutUpdatedByInput], {
    nullable: true,
  })
  @Type(() => ShipUpsertWithWhereUniqueWithoutUpdatedByInput)
  upsert?: Array<ShipUpsertWithWhereUniqueWithoutUpdatedByInput>;

  @Field(() => ShipCreateManyUpdatedByInputEnvelope, { nullable: true })
  @Type(() => ShipCreateManyUpdatedByInputEnvelope)
  createMany?: ShipCreateManyUpdatedByInputEnvelope;

  @Field(() => [ShipWhereUniqueInput], { nullable: true })
  @Type(() => ShipWhereUniqueInput)
  set?: Array<ShipWhereUniqueInput>;

  @Field(() => [ShipWhereUniqueInput], { nullable: true })
  @Type(() => ShipWhereUniqueInput)
  disconnect?: Array<ShipWhereUniqueInput>;

  @Field(() => [ShipWhereUniqueInput], { nullable: true })
  @Type(() => ShipWhereUniqueInput)
  delete?: Array<ShipWhereUniqueInput>;

  @Field(() => [ShipWhereUniqueInput], { nullable: true })
  @Type(() => ShipWhereUniqueInput)
  connect?: Array<ShipWhereUniqueInput>;

  @Field(() => [ShipUpdateWithWhereUniqueWithoutUpdatedByInput], {
    nullable: true,
  })
  @Type(() => ShipUpdateWithWhereUniqueWithoutUpdatedByInput)
  update?: Array<ShipUpdateWithWhereUniqueWithoutUpdatedByInput>;

  @Field(() => [ShipUpdateManyWithWhereWithoutUpdatedByInput], {
    nullable: true,
  })
  @Type(() => ShipUpdateManyWithWhereWithoutUpdatedByInput)
  updateMany?: Array<ShipUpdateManyWithWhereWithoutUpdatedByInput>;

  @Field(() => [ShipScalarWhereInput], { nullable: true })
  @Type(() => ShipScalarWhereInput)
  deleteMany?: Array<ShipScalarWhereInput>;
}
