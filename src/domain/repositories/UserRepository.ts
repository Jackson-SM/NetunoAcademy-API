import { User } from '../entities/User';

export abstract class UserRepository {
  abstract getById(id: string): Promise<User>;
}
