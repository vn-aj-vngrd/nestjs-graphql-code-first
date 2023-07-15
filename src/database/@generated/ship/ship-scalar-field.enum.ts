import { registerEnumType } from '@nestjs/graphql';

export enum ShipScalarFieldEnum {
  id = 'id',
  name = 'name',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  deletedAt = 'deletedAt',
  createdById = 'createdById',
  updatedById = 'updatedById',
  deletedById = 'deletedById',
  isDeleted = 'isDeleted',
}

registerEnumType(ShipScalarFieldEnum, {
  name: 'ShipScalarFieldEnum',
  description: undefined,
});
