import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/AuthController/auth.module';
import { CourseModule } from './controllers/CourseController/course.module';
import { TeacherModule } from './controllers/TeacherController/teacher.module';
import { UserModule } from './controllers/UserController/user.module';

@Module({
  imports: [AuthModule, UserModule, CourseModule, TeacherModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
