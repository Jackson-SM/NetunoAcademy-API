import { Teacher } from 'src/domain/entities/Teacher';

export class TeacherViewModel {
  static toHttp(teacher: Teacher) {
    return {
      id: teacher.id,
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
