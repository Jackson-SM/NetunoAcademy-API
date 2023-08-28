import { Injectable } from '@nestjs/common';
import { Course } from 'src/domain/entities/Course';
import { CourseRepository } from 'src/domain/repositories/CourseRepository';

interface CreateCourseUseCaseRequest {
  title: string;
  teacher: string;
  description: string;
  avatar_url: string;
}

interface CreateCourseUseCaseResponse {
  course: Course;
}

@Injectable()
export class CreateCourseUseCase {
  constructor(private courseRepository: CourseRepository) {}

  async execute(
    request: CreateCourseUseCaseRequest,
  ): Promise<CreateCourseUseCaseResponse> {
    const { title, description, avatar_url, teacher } = request;

    const course = new Course({
      title,
      description,
      avatar_url,
      teacher,
    });

    await this.courseRepository.create(course);

    return {
      course,
    };
  }
}
