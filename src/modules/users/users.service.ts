import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';
import * as generatePassword from 'generate-password';
import { PrismaService } from 'nestjs-prisma';
import { User } from 'src/@generated/user/user.model';
import { UserCreateManyInput } from 'src/@generated/user/user-create-many.input';
import { UserOrderByWithRelationInput } from 'src/@generated/user/user-order-by-with-relation.input';
import { UserWhereInput } from 'src/@generated/user/user-where.input';
import { UserWhereUniqueInput } from 'src/@generated/user/user-where-unique.input';
import { ParamArgs } from 'src/common/args';
import { transformOrderBy } from 'src/common/utils/transform-orderBy';
import { transformWhere } from 'src/common/utils/transform-where';
import { generateUsername } from 'unique-username-generator';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {}

  async findOne(id: User['id']): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(params: ParamArgs): Promise<User[]> {
    const where: UserWhereInput = {};
    let orderBy: UserOrderByWithRelationInput = {
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

    return this.prisma.user.findMany({
      where,
      orderBy,
      skip,
      take,
    });
  }

  async create(input: UserCreateManyInput): Promise<User> {
    return this.prisma.user.create({
      data: input,
    });
  }

  async update(params: {
    id: UserWhereUniqueInput['id'];
    input: UserCreateManyInput;
  }): Promise<User> {
    const { id, input } = params;

    return this.prisma.user.update({
      where: {
        id,
      },
      data: input,
    });
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return data ? true : false;
  }

  async superAdmin(key: string): Promise<User> {
    if (key !== this.configService.get<string>('SUPER_ADMIN_KEY')) {
      throw new BadRequestException('Invalid key');
    }

    const username = generateUsername('-', 2, 16);

    const password = generatePassword.generate({
      length: 16,
      numbers: true,
      symbols: true,
      uppercase: true,
      excludeSimilarCharacters: true,
    });

    const hashedPassword = await argon2.hash(password);
    return await this.prisma.user.create({
      data: {
        name: username,
        username,
        password: hashedPassword,
        permissions: ['ADMIN'],
      },
    });
  }
}
