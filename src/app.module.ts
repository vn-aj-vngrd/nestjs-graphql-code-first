import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaMiddleware } from './middlewares/prisma.middleware';
import { PrismaModule } from 'nestjs-prisma';
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
