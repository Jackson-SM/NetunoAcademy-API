import { Course as RawCourse } from '@prisma/client';
import { Course } from 'src/domain/entities/Course';

export class PrismaCourseMapper {
  static toDomain(course: RawCourse) {
    return new Course(
      {
        title: course.title,
        description: course.description,
        avatar_url: course.avatar_url,
        teacher: course.teacherId,
        students: course.students,
        createdAt: course.createdAt,
        updatedAt: course.updatedAt,
      },
      course.id,
    );
  }

  static toPrisma(course: Course) {
    return {
      id: course.id,
      title: course.title,
      description: course.description,
      avatar_url: course.avatar_url,
      teacherId: course.teacher,
      students: course.students,
      createdAt: course.createdAt,
      updatedAt: course.updatedAt,
    };
  }
}
