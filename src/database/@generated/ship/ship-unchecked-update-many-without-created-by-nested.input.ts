import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipCreateWithoutCreatedByInput } from './ship-create-without-created-by.input';
import { Type } from 'class-transformer';
import { ShipCreateOrConnectWithoutCreatedByInput } from './ship-create-or-connect-without-created-by.input';
import { ShipUpsertWithWhereUniqueWithoutCreatedByInput } from './ship-upsert-with-where-unique-without-created-by.input';
import { ShipCreateManyCreatedByInputEnvelope } from './ship-create-many-created-by-input-envelope.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { ShipUpdateWithWhereUniqueWithoutCreatedByInput } from './ship-update-with-where-unique-without-created-by.input';
import { ShipUpdateManyWithWhereWithoutCreatedByInput } from './ship-update-many-with-where-without-created-by.input';
import { ShipScalarWhereInput } from './ship-scalar-where.input';

@InputType()
export class ShipUncheckedUpdateManyWithoutCreatedByNestedInput {
  @Field(() => [ShipCreateWithoutCreatedByInput], { nullable: true })
  @Type(() => ShipCreateWithoutCreatedByInput)
  create?: Array<ShipCreateWithoutCreatedByInput>;

  @Field(() => [ShipCreateOrConnectWithoutCreatedByInput], { nullable: true })
  @Type(() => ShipCreateOrConnectWithoutCreatedByInput)
  connectOrCreate?: Array<ShipCreateOrConnectWithoutCreatedByInput>;

  @Field(() => [ShipUpsertWithWhereUniqueWithoutCreatedByInput], {
    nullable: true,
  })
  @Type(() => ShipUpsertWithWhereUniqueWithoutCreatedByInput)
  upsert?: Array<ShipUpsertWithWhereUniqueWithoutCreatedByInput>;

  @Field(() => ShipCreateManyCreatedByInputEnvelope, { nullable: true })
  @Type(() => ShipCreateManyCreatedByInputEnvelope)
  createMany?: ShipCreateManyCreatedByInputEnvelope;

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

  @Field(() => [ShipUpdateWithWhereUniqueWithoutCreatedByInput], {
    nullable: true,
  })
  @Type(() => ShipUpdateWithWhereUniqueWithoutCreatedByInput)
  update?: Array<ShipUpdateWithWhereUniqueWithoutCreatedByInput>;

  @Field(() => [ShipUpdateManyWithWhereWithoutCreatedByInput], {
    nullable: true,
  })
  @Type(() => ShipUpdateManyWithWhereWithoutCreatedByInput)
  updateMany?: Array<ShipUpdateManyWithWhereWithoutCreatedByInput>;

  @Field(() => [ShipScalarWhereInput], { nullable: true })
  @Type(() => ShipScalarWhereInput)
  deleteMany?: Array<ShipScalarWhereInput>;
}
