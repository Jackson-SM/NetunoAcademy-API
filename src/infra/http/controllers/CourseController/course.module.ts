import { Module } from '@nestjs/common';
import { CreateCourseController } from './CreateCourseController';
import { CreateCourseUseCase } from 'src/application/use-cases/courses/create-course-use-case';
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';
import { CloudinaryService } from 'src/application/services/image-service/cloudinary.service';
import { GetCourseByIdUseCase } from 'src/application/use-cases/courses/get-course-by-id-use-case';
import { GetCourseByIdController } from './GetCourseByIdController';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateCourseController, GetCourseByIdController],
  providers: [
    CreateCourseUseCase,
    {
      provide: ServiceImageRepository,
      useClass: CloudinaryService,
    },
    GetCourseByIdUseCase,
  ],
  exports: [],
})
export class CourseModule {}
