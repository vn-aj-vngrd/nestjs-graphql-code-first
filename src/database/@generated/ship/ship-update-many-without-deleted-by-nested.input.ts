import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipCreateWithoutDeletedByInput } from './ship-create-without-deleted-by.input';
import { Type } from 'class-transformer';
import { ShipCreateOrConnectWithoutDeletedByInput } from './ship-create-or-connect-without-deleted-by.input';
import { ShipUpsertWithWhereUniqueWithoutDeletedByInput } from './ship-upsert-with-where-unique-without-deleted-by.input';
import { ShipCreateManyDeletedByInputEnvelope } from './ship-create-many-deleted-by-input-envelope.input';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { ShipUpdateWithWhereUniqueWithoutDeletedByInput } from './ship-update-with-where-unique-without-deleted-by.input';
import { ShipUpdateManyWithWhereWithoutDeletedByInput } from './ship-update-many-with-where-without-deleted-by.input';
import { ShipScalarWhereInput } from './ship-scalar-where.input';

@InputType()
export class ShipUpdateManyWithoutDeletedByNestedInput {
  @Field(() => [ShipCreateWithoutDeletedByInput], { nullable: true })
  @Type(() => ShipCreateWithoutDeletedByInput)
  create?: Array<ShipCreateWithoutDeletedByInput>;

  @Field(() => [ShipCreateOrConnectWithoutDeletedByInput], { nullable: true })
  @Type(() => ShipCreateOrConnectWithoutDeletedByInput)
  connectOrCreate?: Array<ShipCreateOrConnectWithoutDeletedByInput>;

  @Field(() => [ShipUpsertWithWhereUniqueWithoutDeletedByInput], {
    nullable: true,
  })
  @Type(() => ShipUpsertWithWhereUniqueWithoutDeletedByInput)
  upsert?: Array<ShipUpsertWithWhereUniqueWithoutDeletedByInput>;

  @Field(() => ShipCreateManyDeletedByInputEnvelope, { nullable: true })
  @Type(() => ShipCreateManyDeletedByInputEnvelope)
  createMany?: ShipCreateManyDeletedByInputEnvelope;

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

  @Field(() => [ShipUpdateWithWhereUniqueWithoutDeletedByInput], {
    nullable: true,
  })
  @Type(() => ShipUpdateWithWhereUniqueWithoutDeletedByInput)
  update?: Array<ShipUpdateWithWhereUniqueWithoutDeletedByInput>;

  @Field(() => [ShipUpdateManyWithWhereWithoutDeletedByInput], {
    nullable: true,
  })
  @Type(() => ShipUpdateManyWithWhereWithoutDeletedByInput)
  updateMany?: Array<ShipUpdateManyWithWhereWithoutDeletedByInput>;

  @Field(() => [ShipScalarWhereInput], { nullable: true })
  @Type(() => ShipScalarWhereInput)
  deleteMany?: Array<ShipScalarWhereInput>;
}
