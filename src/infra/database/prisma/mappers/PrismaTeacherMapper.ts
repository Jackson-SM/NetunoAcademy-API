import { Teacher as RawTeacher } from '@prisma/client';
import { Teacher } from 'src/domain/entities/Teacher';

export class PrismaTeacherMapper {
  static toDomain(teacher: RawTeacher): Teacher {
    return new Teacher({
      name: teacher.name,
      email: teacher.email,
      age: teacher.age,
      training: teacher.training,
      stacks: teacher.stacks,
      description: teacher.description,
      photo: teacher.photo,
      createdAt: teacher.createdAt,
      updatedAt: teacher.updatedAt,
    });
  }

  static toPrisma(teacher: Teacher) {
    return {
      name: teacher.name,
      email: teacher.email,
      age: teacher.age,
      training: teacher.training,
      stacks: teacher.stacks,
      description: teacher.description,
      photo: teacher.photo,
      createdAt: teacher.createdAt,
      updatedAt: teacher.updatedAt,
    };
  }
}
