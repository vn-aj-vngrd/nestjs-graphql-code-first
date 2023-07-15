import { Injectable } from '@nestjs/common';
import { Ship, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { ShipCreateInput } from 'src/database/@generated/ship/ship-create.input';
import { ShipUpdateInput } from 'src/database/@generated/ship/ship-update.input';

interface ShipWithUser extends Ship {
  createdBy: User;
  updatedBy: User;
  deletedBy: User;
}

@Injectable()
export class ShipsService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: Ship['id']): Promise<ShipWithUser | null> {
    return this.prisma.ship.findUnique({
      where: {
        id,
      },
      include: {
        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
  }

  async findAll(): Promise<ShipWithUser[]> {
    // let orderByObj: Prisma.ShipOrderByWithRelationInput = {
    //   createdAt: 'desc',
    // };

    // if (orderBy) {
    //   orderByObj = formatOrderBy(orderBy.field, orderBy.direction);
    // }

    return this.prisma.ship.findMany({
      include: {
        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
  }

  async create(input: ShipCreateInput): Promise<ShipWithUser> {
    const { createdBy, updatedBy, deletedBy, ...data } = input;

    return this.prisma.ship.create({
      data: {
        ...data,
        createdBy: {
          connect: {
            id: createdBy.connect.id,
          },
        },
        updatedBy: {
          connect: {
            id: updatedBy.connect.id,
          },
        },
        deletedBy: {
          connect: {
            id: deletedBy.connect.id,
          },
        },
      },
      include: {
        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
  }

  async update(params: ShipUpdateInput): Promise<ShipWithUser> {
    const { id, createdBy, updatedBy, deletedBy, ...data } = params;

    return this.prisma.ship.update({
      where: {
        id: id as string,
      },
      data: {
        ...data,
        createdBy: {
          connect: {
            id: createdBy.connect.id,
          },
        },
        updatedBy: {
          connect: {
            id: updatedBy.connect.id,
          },
        },
        deletedBy: {
          connect: {
            id: deletedBy.connect.id,
          },
        },
      },
      include: {
        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
  }

  async delete(id: string): Promise<ShipWithUser> {
    return this.prisma.ship.delete({
      where: {
        id,
      },
      include: {
        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
  }
}
