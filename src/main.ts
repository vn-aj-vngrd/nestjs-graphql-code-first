import 'reflect-metadata';

import compression from '@fastify/compress';
import fastifyCookie from '@fastify/cookie';
import fastifyCsrf from '@fastify/csrf-protection';
import helmet from '@fastify/helmet';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { contentParser } from 'fastify-multer';
import { WinstonModule } from 'nest-winston';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import { join } from 'path';
import { format, transports } from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false }),
    {
      logger: WinstonModule.createLogger({
        transports: [
          // file on daily rotation (error only)
          new DailyRotateFile({
            // %DATE will be replaced by the current date
            filename: `logs/%DATE%-error.log`,
            level: 'error',
            format: format.combine(format.timestamp(), format.json()),
            datePattern: 'YYYY-MM-DD',
            zippedArchive: false, // don't want to zip our logs
            maxFiles: '30d', // will keep log until they are older than 30 days
          }),
          // same for all levels
          new DailyRotateFile({
            filename: `logs/%DATE%-combined.log`,
            format: format.combine(format.timestamp(), format.json()),
            datePattern: 'YYYY-MM-DD',
            zippedArchive: false,
            maxFiles: '30d',
          }),
          new transports.Console({
            format: format.combine(
              format.cli(),
              format.splat(),
              format.timestamp(),
              format.printf((info) => {
                return `${info.timestamp} ${info.level}: ${info.message}`;
              }),
            ),
          }),
        ],
      }),
    },
  );

  // CORS
  app.enableCors({
    origin: [process.env.CORS_URL],
    credentials: true,
  });

  // COOKIE
  await app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
  });

  // CSRF
  await app.register(fastifyCsrf);

  // HELMET
  await app.register(helmet, {
    crossOriginResourcePolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
        scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
      },
    },
  });

  // STATIC FILES
  app.register(contentParser);
  app.useStaticAssets({
    root: join(__dirname, '..', '..', 'public'),
    prefix: '/public',
  });

  // VALIDATION
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // COMPRESSION
  await app.register(compression, {
    encodings: ['gzip', 'deflate'],
    threshold: 500,
  });

  // PRISMA EXCEPTION FILTER
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new PrismaClientExceptionFilter(httpAdapter, {
      // Prisma Error Code: HTTP Status Response
      P2000: HttpStatus.BAD_REQUEST,
      P2001: HttpStatus.UNAUTHORIZED,
      P2002: HttpStatus.CONFLICT,
      P2003: HttpStatus.FORBIDDEN,
      P2004: HttpStatus.NOT_FOUND,
      P2005: HttpStatus.UNPROCESSABLE_ENTITY,
      P2006: HttpStatus.UNPROCESSABLE_ENTITY,
      P2007: HttpStatus.UNPROCESSABLE_ENTITY,
      P2008: HttpStatus.UNPROCESSABLE_ENTITY,
      P2009: HttpStatus.UNPROCESSABLE_ENTITY,
      P2010: HttpStatus.UNPROCESSABLE_ENTITY,
      P2011: HttpStatus.UNPROCESSABLE_ENTITY,
      P2012: HttpStatus.UNPROCESSABLE_ENTITY,
      P2013: HttpStatus.UNPROCESSABLE_ENTITY,
      P2014: HttpStatus.UNPROCESSABLE_ENTITY,
      P2015: HttpStatus.UNPROCESSABLE_ENTITY,
      P2016: HttpStatus.UNPROCESSABLE_ENTITY,
      P2017: HttpStatus.UNPROCESSABLE_ENTITY,
      P2018: HttpStatus.UNPROCESSABLE_ENTITY,
      P2019: HttpStatus.UNPROCESSABLE_ENTITY,
      P2020: HttpStatus.UNPROCESSABLE_ENTITY,
      P2021: HttpStatus.UNPROCESSABLE_ENTITY,
      P2022: HttpStatus.UNPROCESSABLE_ENTITY,
      P2023: HttpStatus.UNPROCESSABLE_ENTITY,
      P2024: HttpStatus.UNPROCESSABLE_ENTITY,
      P2025: HttpStatus.NOT_FOUND,
      P2026: HttpStatus.UNPROCESSABLE_ENTITY,
      P2027: HttpStatus.UNPROCESSABLE_ENTITY,
      P2028: HttpStatus.UNPROCESSABLE_ENTITY,
      P2029: HttpStatus.UNPROCESSABLE_ENTITY,
      P2030: HttpStatus.UNPROCESSABLE_ENTITY,
      P2031: HttpStatus.UNPROCESSABLE_ENTITY,
      P2032: HttpStatus.UNPROCESSABLE_ENTITY,
      P2033: HttpStatus.UNPROCESSABLE_ENTITY,
      P2034: HttpStatus.UNPROCESSABLE_ENTITY,
      P2035: HttpStatus.UNPROCESSABLE_ENTITY,
      P2036: HttpStatus.UNPROCESSABLE_ENTITY,
      P2037: HttpStatus.UNPROCESSABLE_ENTITY,
      P2038: HttpStatus.UNPROCESSABLE_ENTITY,
      P2039: HttpStatus.UNPROCESSABLE_ENTITY,
      P2040: HttpStatus.UNPROCESSABLE_ENTITY,
      P2041: HttpStatus.UNPROCESSABLE_ENTITY,
      P2042: HttpStatus.UNPROCESSABLE_ENTITY,
      P2043: HttpStatus.UNPROCESSABLE_ENTITY,
      P2044: HttpStatus.UNPROCESSABLE_ENTITY,
      P2045: HttpStatus.UNPROCESSABLE_ENTITY,
      P2046: HttpStatus.UNPROCESSABLE_ENTITY,
      P2047: HttpStatus.UNPROCESSABLE_ENTITY,
      P2048: HttpStatus.UNPROCESSABLE_ENTITY,
      P2049: HttpStatus.UNPROCESSABLE_ENTITY,
      P2050: HttpStatus.UNPROCESSABLE_ENTITY,
      P2051: HttpStatus.UNPROCESSABLE_ENTITY,
      P2052: HttpStatus.UNPROCESSABLE_ENTITY,
      P2053: HttpStatus.UNPROCESSABLE_ENTITY,
      P2054: HttpStatus.UNPROCESSABLE_ENTITY,
      P2055: HttpStatus.UNPROCESSABLE_ENTITY,
      P2056: HttpStatus.UNPROCESSABLE_ENTITY,
      P2057: HttpStatus.UNPROCESSABLE_ENTITY,
      P2058: HttpStatus.UNPROCESSABLE_ENTITY,
      P2059: HttpStatus.UNPROCESSABLE_ENTITY,
      P2060: HttpStatus.UNPROCESSABLE_ENTITY,
      P2061: HttpStatus.UNPROCESSABLE_ENTITY,
      P2062: HttpStatus.UNPROCESSABLE_ENTITY,
      P2063: HttpStatus.UNPROCESSABLE_ENTITY,
      P2064: HttpStatus.UNPROCESSABLE_ENTITY,
      P2065: HttpStatus.UNPROCESSABLE_ENTITY,
      P2066: HttpStatus.UNPROCESSABLE_ENTITY,
      P2067: HttpStatus.UNPROCESSABLE_ENTITY,
      P2068: HttpStatus.UNPROCESSABLE_ENTITY,
      P2069: HttpStatus.UNPROCESSABLE_ENTITY,
      P2070: HttpStatus.UNPROCESSABLE_ENTITY,
      P2071: HttpStatus.UNPROCESSABLE_ENTITY,
      P2072: HttpStatus.UNPROCESSABLE_ENTITY,
      P2073: HttpStatus.UNPROCESSABLE_ENTITY,
      P2074: HttpStatus.UNPROCESSABLE_ENTITY,
      P2075: HttpStatus.UNPROCESSABLE_ENTITY,
      P2076: HttpStatus.UNPROCESSABLE_ENTITY,
      P2077: HttpStatus.UNPROCESSABLE_ENTITY,
      P2078: HttpStatus.UNPROCESSABLE_ENTITY,
      P2079: HttpStatus.UNPROCESSABLE_ENTITY,
      P2080: HttpStatus.UNPROCESSABLE_ENTITY,
      P2081: HttpStatus.UNPROCESSABLE_ENTITY,
      P2082: HttpStatus.UNPROCESSABLE_ENTITY,
      P2083: HttpStatus.UNPROCESSABLE_ENTITY,
      P2084: HttpStatus.UNPROCESSABLE_ENTITY,
      P2085: HttpStatus.UNPROCESSABLE_ENTITY,
      P2086: HttpStatus.UNPROCESSABLE_ENTITY,
      P2087: HttpStatus.UNPROCESSABLE_ENTITY,
      P2088: HttpStatus.UNPROCESSABLE_ENTITY,
      P2089: HttpStatus.UNPROCESSABLE_ENTITY,
      P2090: HttpStatus.UNPROCESSABLE_ENTITY,
      P2091: HttpStatus.UNPROCESSABLE_ENTITY,
      P2092: HttpStatus.UNPROCESSABLE_ENTITY,
      P2093: HttpStatus.UNPROCESSABLE_ENTITY,
      P2094: HttpStatus.UNPROCESSABLE_ENTITY,
      P2095: HttpStatus.UNPROCESSABLE_ENTITY,
      P2096: HttpStatus.UNPROCESSABLE_ENTITY,
      P2097: HttpStatus.UNPROCESSABLE_ENTITY,
      P2098: HttpStatus.UNPROCESSABLE_ENTITY,
      P2099: HttpStatus.UNPROCESSABLE_ENTITY,
      P2100: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );

  await app.listen(5000);
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`GraphQL Playground: ${await app.getUrl()}/graphql`);
}
bootstrap();
