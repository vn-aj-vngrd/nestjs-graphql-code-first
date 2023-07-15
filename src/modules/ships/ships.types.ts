import { Ship, User } from '@prisma/client';

export interface ShipWithUser extends Ship {
  createdBy: User;
  updatedBy: User;
  deletedBy: User;
}
