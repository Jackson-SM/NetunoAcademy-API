import { JwtPayload } from 'jsonwebtoken';
import { User } from '../entities/User';
import { JwtPayloadService } from '../interfaces/JwtPayloadService';

export abstract class ServiceAuthenticateRepository {
  abstract authenticate(user: User): Promise<string>;
  abstract decode(token: string): Promise<JwtPayloadService>;
  abstract verify(token: string): Promise<string | JwtPayload>;
}
