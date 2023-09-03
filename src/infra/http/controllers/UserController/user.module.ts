import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GetUserByIdController } from './GetUserByIdController';
import { GetUserByIdCase } from 'src/application/use-cases/users/get-user-by-id-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { LoggerMiddleware } from '../../middlewares/LoggerMiddleware';
import { ServiceAuthenticateRepository } from 'src/domain/repositories/ServiceAuthenticateRepository';
import { JwtService } from 'src/application/services/authenticate/jwt.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GetUserByIdController],
  providers: [
    GetUserByIdCase,
    {
      provide: ServiceAuthenticateRepository,
      useClass: JwtService,
    },
  ],
  exports: [],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
