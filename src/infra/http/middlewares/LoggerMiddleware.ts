import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ServiceAuthenticateRepository } from 'src/domain/repositories/ServiceAuthenticateRepository';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private jwtService: ServiceAuthenticateRepository) {}
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies['access-token'];

      await this.jwtService.verify(token);

      return next();
    } catch (err) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
