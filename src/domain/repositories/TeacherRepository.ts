import { Teacher } from '../entities/Teacher';
import { User } from '../entities/User';

export abstract class TeacherRepository {
  abstract create(teacher: Teacher): Promise<Teacher>;
  abstract getById(id: string): Promise<User>;
}
