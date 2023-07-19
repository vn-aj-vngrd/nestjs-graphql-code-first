import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma, Ship, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { ShipUncheckedCreateInput } from 'src/@generated/ship/ship-unchecked-create.input';
import { ShipUncheckedUpdateInput } from 'src/@generated/ship/ship-unchecked-update.input';
import { ParamArgs } from 'src/common/args';
import { transformOrderBy } from 'src/common/utils/transform-orderBy';
import { transformWhere } from 'src/common/utils/transform-where';

export interface ShipWithUser extends Ship {
  createdBy: User;
  updatedBy: User;
}

@Injectable()
export class ShipsService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<ShipWithUser | null> {
    return this.prisma.ship.findUnique({
      where: {
        id,
      },
      include: {
        createdBy: true,
        updatedBy: true,
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
      },
    });
  }

  async create(input: ShipUncheckedCreateInput): Promise<ShipWithUser> {
    const data = await this.prisma.ship.create({
      data: input,
      include: {
        createdBy: true,
        updatedBy: true,
      },
    });

    await this.prisma.auditLog.create({
      data: {
        userId: input.createdById,
        action: 'CREATE',
        table: 'ships',
        description: `created a new Ship (${data.id})`,
        values: JSON.stringify(data),
      },
    });

    return data;
  }

  async update(params: {
    id: string;
    input: ShipUncheckedUpdateInput;
    userId: string;
    action: 'UPDATE' | 'SOFT_DELETE';
  }): Promise<ShipWithUser> {
    const { id, input, userId, action } = params;

    const oldData = await this.prisma.ship.findUnique({
      where: {
        id,
      },
    });

    if (!oldData) {
      throw new BadRequestException('Ship not found');
    }

    const data = await this.prisma.ship.update({
      where: {
        id,
      },
      data: input,
      include: {
        createdBy: true,
        updatedBy: true,
      },
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action,
        table: 'ships',
        description: `${action
          .replace(/_/g, ' ')
          .toLowerCase()
          .split(' ')
          .join(' ')}d a Ship (${oldData.id})`,
        values: JSON.stringify(data),
        valuesBefore: JSON.stringify(oldData),
      },
    });

    return data;
  }

  async delete(id: string, userId: string): Promise<boolean> {
    const data = await this.prisma.ship.delete({
      where: {
        id,
      },
      include: {
        createdBy: true,
        updatedBy: true,
      },
    });

    await this.prisma.auditLog.create({
      data: {
        userId,
        action: 'HARD_DELETE',
        table: 'ships',
        description: `hard deleted a Ship ${id}`,
        values: JSON.stringify(data),
      },
    });

    return data ? true : false;
  }
}
