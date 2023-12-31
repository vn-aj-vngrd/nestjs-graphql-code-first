import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import * as compression from 'compression';
import helmet from 'helmet';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  // CORS
  app.enableCors({
    origin: [process.env.CORS_URL],
    credentials: true,
  });

  // HELMET
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [
            `'self'`,
            'data:',
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [
            `'self'`,
            'apollo-server-landing-page.cdn.apollographql.com',
          ],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'],
        },
      },
    }),
  );

  // COMPRESSION
  app.use(compression());

  // Validation
  app.useGlobalPipes(new ValidationPipe());

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

  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
