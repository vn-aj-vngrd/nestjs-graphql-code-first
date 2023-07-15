import { Injectable } from '@nestjs/common';
import { Prisma, Ship } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { ParamArgs } from 'src/common/args';
import { ShipCreateInput } from 'src/database/@generated/ship/ship-create.input';
import { ShipUpdateInput } from 'src/database/@generated/ship/ship-update.input';
import { transformWhere } from 'src/utils/transform-where';

import { ShipWithUser } from './ships.types';

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

  async findAll(params: ParamArgs): Promise<ShipWithUser[]> {
    const where: Prisma.ShipWhereInput = {};

    if (params.search) {
      where.name = {
        contains: params.search,
        mode: 'insensitive',
      };
    }

    if (params.filters && params.filters.length) {
      params.filters.forEach((filter) => {
        const { field, operator, value } = filter;

        const transformed = transformWhere(field, operator, value);

        Object.assign(where, transformed);
      });
    }

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
        id: id as ShipUpdateInput['id']['set'],
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
