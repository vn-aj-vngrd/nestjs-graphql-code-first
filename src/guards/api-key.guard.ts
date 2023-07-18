import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const gqlContext = GqlExecutionContext.create(context);
    const { headers } = gqlContext.getContext().req;
    const apiKey = headers['x-api-key'];

    if (!this.isApiKeyValid(apiKey)) {
      throw new UnauthorizedException({
        message: 'Invalid API key',
      });
    }

    return true;
  }

  private isApiKeyValid(apiKey: string): boolean {
    return apiKey === this.configService.get<string>('API_KEY');
  }
}
