import { Injectable } from '@nestjs/common';
import { Course } from 'src/domain/entities/Course';
import { CourseRepository } from 'src/domain/repositories/CourseRepository';

interface GetCourseByIdUseCaseRequest {
  id: string;
}

interface GetCourseByIdUseCaseResponse {
  course: Course;
}

@Injectable()
export class GetCourseByIdUseCase {
  constructor(private courseRepository: CourseRepository) {}

  async execute(
    request: GetCourseByIdUseCaseRequest,
  ): Promise<GetCourseByIdUseCaseResponse> {
    const { id } = request;

    const course = await this.courseRepository.getById(id);

    return {
      course,
    };
  }
}
