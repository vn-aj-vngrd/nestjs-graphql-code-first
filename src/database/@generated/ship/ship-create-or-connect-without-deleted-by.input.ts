import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShipWhereUniqueInput } from './ship-where-unique.input';
import { Type } from 'class-transformer';
import { ShipCreateWithoutDeletedByInput } from './ship-create-without-deleted-by.input';

@InputType()
export class ShipCreateOrConnectWithoutDeletedByInput {
  @Field(() => ShipWhereUniqueInput, { nullable: false })
  @Type(() => ShipWhereUniqueInput)
  where!: ShipWhereUniqueInput;

  @Field(() => ShipCreateWithoutDeletedByInput, { nullable: false })
  @Type(() => ShipCreateWithoutDeletedByInput)
  create!: ShipCreateWithoutDeletedByInput;
}
