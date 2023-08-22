import { Course } from '../entities/Course';

export abstract class CourseRepository {
  abstract create(course: Course): Promise<Course>;
  abstract getById(id: string): Promise<Course>;
}
