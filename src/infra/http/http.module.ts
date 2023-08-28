import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/AuthController/auth.module';
import { UserModule } from './controllers/UserController/user.module';
import { DatabaseModule } from '../database/database.module';
import { CourseModule } from './controllers/CourseController/course.module';

@Module({
  imports: [AuthModule, UserModule, CourseModule, DatabaseModule],
})
export class HttpModule {}
