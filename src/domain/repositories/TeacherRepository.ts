import { Teacher } from '../entities/Teacher';

export abstract class TeacherRepository {
  abstract create(teacher: Teacher): Promise<Teacher>;
  abstract getById(id: string): Promise<Teacher>;
}
