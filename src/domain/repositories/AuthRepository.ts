import { User } from '../entities/User';

export abstract class AuthRepository {
  abstract register(user: User): Promise<void>;
  abstract login(email: string, password: string): Promise<User>;
}
