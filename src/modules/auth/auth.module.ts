import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/strategies/local.strategy';

import { AuthResolver } from '../auth/auth.resolver';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
    PassportModule,
    UsersModule,
  ],
  providers: [AuthService, AuthResolver, LocalStrategy],
})
export class AuthModule {}
