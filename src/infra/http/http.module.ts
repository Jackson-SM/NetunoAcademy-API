import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/AuthController/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
