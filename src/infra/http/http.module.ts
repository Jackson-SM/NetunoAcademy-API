import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/AuthController/auth.module';
import { UserModule } from './controllers/UserController/user.module';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
