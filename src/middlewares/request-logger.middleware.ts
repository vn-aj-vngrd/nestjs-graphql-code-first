import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(RequestLoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      const statusCode = res.statusCode;
      const { method, url } = req;
      const logMessage = `[${method}] ${url} - ${statusCode}`;

      switch (statusCode) {
        case 401:
          this.logger.warn(logMessage, 'Unauthorized');
          break;
        case 404:
          this.logger.warn(logMessage, 'Not Found');
          break;
        case 405:
          this.logger.warn(logMessage, 'Method Not Allowed');
          break;
        default:
          this.logger.log(logMessage);
          break;
      }
    });

    next();
  }
}
