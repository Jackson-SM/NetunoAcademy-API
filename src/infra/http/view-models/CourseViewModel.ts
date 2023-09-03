import { Course } from 'src/domain/entities/Course';

export class UserViewModel {
  static toHttp(course: Course) {
    return {
      id: course.id,
      title: course.title,
      teacher: course.teacher,
      description: course.description,
      avatar_url: course.avatar_url,
      students: course.students,
      createdAt: course.createdAt,
      updatedAt: course.updatedAt,
    };
  }
}
