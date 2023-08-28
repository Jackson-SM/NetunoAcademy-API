import { Module } from '@nestjs/common';
import { CreateCourseController } from './CreateCourseController';
import { CreateCourseUseCase } from 'src/application/use-cases/courses/create-course-use-case';
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';
import { CloudinaryService } from 'src/application/services/image-service/cloudinary.service';

@Module({
  controllers: [CreateCourseController],
  providers: [
    CreateCourseUseCase,
    {
      provide: ServiceImageRepository,
      useClass: CloudinaryService,
    },
  ],
  exports: [],
})
export class CourseModule {}
