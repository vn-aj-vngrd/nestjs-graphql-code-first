import { Injectable } from '@nestjs/common';
import { Prisma, Ship } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { ShipUncheckedCreateInput } from 'src/@generated/ship/ship-unchecked-create.input';
import { ShipUncheckedUpdateInput } from 'src/@generated/ship/ship-unchecked-update.input';
import { ShipWhereUniqueInput } from 'src/@generated/ship/ship-where-unique.input';
import { ParamArgs } from 'src/common/args';
import { transformOrderBy } from 'src/common/utils/transform-orderBy';
import { transformWhere } from 'src/common/utils/transform-where';

import { ShipWithUser } from './ships.type';

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

  async create(input: ShipUncheckedCreateInput): Promise<ShipWithUser> {
    return this.prisma.ship.create({
      data: input,
      include: {
        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
  }

  async update(params: {
    id: ShipWhereUniqueInput['id'];
    input: ShipUncheckedUpdateInput;
  }): Promise<ShipWithUser> {
    const { id, input } = params;

    return this.prisma.ship.update({
      where: {
        id,
      },
      data: input,
      include: {
        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.prisma.ship.delete({
      where: {
        id,
      },
      include: {
        createdBy: true,
        updatedBy: true,
        deletedBy: true,
      },
    });

    return data ? true : false;
  }
}
