import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { ServiceAuthenticateRepository } from 'src/domain/repositories/ServiceAuthenticateRepository';
import * as jwt from 'jsonwebtoken';
import { JwtPayloadService } from 'src/domain/interfaces/JwtPayloadService';

@Injectable()
export class JwtService implements ServiceAuthenticateRepository {
  async authenticate(user: User): Promise<string> {
    const payload: JwtPayloadService = {
      id: user.id,
      email: user.email,
      password: user.password,
    };

    const token = jwt.sign(payload, `${process.env.SECRET_KEY_JWT}`, {
      expiresIn: '7d',
    });

    return token;
  }
  async decode(token: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}