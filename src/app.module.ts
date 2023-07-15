import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from 'nestjs-prisma';

import { PrismaMiddleware } from './middlewares/prisma.middleware';
import { ShipsModule } from './modules/ships/ships.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [PrismaMiddleware()],
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ShipsModule,
  ],
})
export class AppModule {}
