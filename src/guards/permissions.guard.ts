import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Permission } from '@prisma/client';
import { PERMISSION_KEY } from 'src/common/decorators/permissions.decorator';
import { JwtPayload } from 'src/common/types/token.type';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<Permission[]>(
      PERMISSION_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredPermissions) {
      return true;
    }

    if (!context.switchToHttp().getRequest().cookies['at']) {
      return false;
    }

    const cookie = context
      .switchToHttp()
      .getRequest()
      .cookies['at'].split(';')[0];

    const token = context.switchToHttp().getRequest().unsignCookie(cookie);
    if (!token) {
      return false;
    }

    const { permissions } = this.jwtService.decode(token.value) as JwtPayload;

    if (this.configService.get<string>('NODE_ENV').includes('development')) {
      console.log('\nRequired Permissions: ' + requiredPermissions);
      console.log('Permissions: ' + permissions + '\n');
    }

    return requiredPermissions.some((permission) =>
      permissions?.includes(permission),
    );
  }
}
