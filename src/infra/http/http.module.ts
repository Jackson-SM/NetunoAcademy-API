import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/AuthController/auth.module';
import { UserModule } from './controllers/UserController/user.module';
import { CourseModule } from './controllers/CourseController/course.module';

@Module({
  imports: [AuthModule, UserModule, CourseModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
