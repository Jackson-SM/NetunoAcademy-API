import { User } from '../entities/User';

export abstract class ServiceAuthenticateRepository {
  abstract authenticate(user: User): Promise<string>;
  abstract decode(token: string): Promise<boolean>;
}
