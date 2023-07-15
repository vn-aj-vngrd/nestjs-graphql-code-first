import { Injectable } from '@nestjs/common';
import { Prisma, Ship } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { ParamArgs } from 'src/common/args';
import { transformOrderBy } from 'src/common/utils/transform-orderBy';
import { transformWhere } from 'src/common/utils/transform-where';
import { ShipCreateInput } from 'src/database/@generated/ship/ship-create.input';
import { ShipUpdateInput } from 'src/database/@generated/ship/ship-update.input';

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
    let orderBy: Prisma.ShipOrderByWithRelationInput = {
      createdAt: 'desc',
    };
    const skip = params.pagination?.skip ?? undefined;
    const take = params.pagination?.take ?? undefined;

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

    if (params.orderBy) {
      const { field, direction } = params.orderBy;

      orderBy = transformOrderBy(field, direction);
    }

    console.log(where);

    return this.prisma.ship.findMany({
      where,
      orderBy,
      skip,
      take,
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

  async delete(id: string): Promise<boolean> {
    const response = await this.prisma.ship.delete({
      where: {
        id,
      },
      include: {
        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });

    return response ? true : false;
  }
}
