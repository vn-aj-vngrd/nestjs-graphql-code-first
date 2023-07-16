import { JwtService } from '@nestjs/jwt';
import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';
import { JwtPayload } from 'src/common/types/token.type';

export const staticFileMiddleware = (
  req: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction,
) => {
  try {
    if (!req.url.startsWith('/public/')) {
      return done();
    }

    const accessToken = req.cookies['at'];
    if (!accessToken) {
      return reply
        .status(401)
        .send({ statusCode: 401, message: 'Unauthorized' });
    }

    const { valid, value } = req.unsignCookie(accessToken);
    if (!valid) {
      return reply
        .status(401)
        .send({ statusCode: 401, message: 'Unauthorized' });
    }

    const url = process.env.API_URL + req.url;
    const type = req.url.split('/')[2];
    const jwtService = new JwtService({ secret: process.env.AT_SECRET });
    const { permissions, sub } = jwtService.decode(value) as JwtPayload;

    console.log('\nURL: ' + url);
    console.log('Type: ' + type);
    console.log('Permissions: ' + permissions);
    console.log('Sub: ' + sub + '\n');

    // TODO: Implement permissions checking

    // const typePermissionsMapping = {
    //   'crew-contracts': ['SUPER_ADMIN', 'READ_CONTRACT', 'BASIC_READ'],
    //   crews: ['SUPER_ADMIN', 'READ_CREW', 'BASIC_READ'],
    //   'crew-databases': ['SUPER_ADMIN', 'READ_CREW'],
    //   evaluations: ['SUPER_ADMIN', 'READ_EVALUATION'],
    //   'flight-quotations': ['SUPER_ADMIN', 'READ_FLIGHT_QUOTATION'],
    //   'manning-agencies': ['SUPER_ADMIN', 'READ_MANNING_AGENCY', 'BASIC_ADMIN'],
    //   'onboard-crew-promotions': ['SUPER_ADMIN', 'READ_ONBOARD_CREW_PROMOTION'],
    //   records: ['SUPER_ADMIN', 'READ_RECORD', 'BASIC_READ'],
    //   users: ['SUPER_ADMIN', 'READ_USER'],
    // };

    // if (
    //   typePermissionsMapping[type] &&
    //   permissions.some((p) => typePermissionsMapping[type].includes(p))
    // ) {
    //   const prisma = new PrismaService();

    //   if (type === 'crews' && userType === 'CREW') {
    //     const crew = prisma.crew.findFirst({
    //       where: {
    //         userId: sub,
    //         image: url,
    //       },
    //     });

    //     if (!crew) {
    //       return reply
    //         .status(403)
    //         .send({ statusCode: 403, message: 'Forbidden' });
    //     }
    //   }

    //   if (type === 'records' && userType === 'CREW') {
    //     const record = prisma.record.findFirst({
    //       where: {
    //         crew: {
    //           userId: sub,
    //         },
    //         file: url,
    //       },
    //     });

    //     if (!record) {
    //       return reply
    //         .status(403)
    //         .send({ statusCode: 403, message: 'Forbidden' });
    //     }
    //   }

    //   return done();
    // }

    reply.status(401).send({ statusCode: 401, message: 'Unauthorized' });
  } catch (err) {
    throw new Error(err);
  }
};
