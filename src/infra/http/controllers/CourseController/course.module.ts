import { Module } from '@nestjs/common';
import { CreateCourseController } from './CreateCourseController';

@Module({
  controllers: [CreateCourseController],
  providers: [],
  exports: [],
})
export class CourseModule {}
