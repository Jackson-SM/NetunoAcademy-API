import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { RegisterUseCase } from 'src/application/use-cases/auth/register-use-case';
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';
import { CloudinaryService } from 'src/application/services/image-service/cloudinary.service';
import { RegisterController } from './RegisterController';
import { LoginUseCase } from 'src/application/use-cases/auth/login-use-case';
import { ServiceAuthenticateRepository } from 'src/domain/repositories/ServiceAuthenticateRepository';
import { JwtService } from 'src/application/services/authenticate/jwt.service';
import { LoginController } from './LoginController';

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterController, LoginController],
  providers: [
    RegisterUseCase,
    {
      provide: ServiceImageRepository,
      useClass: CloudinaryService,
    },
    LoginUseCase,
    {
      provide: ServiceAuthenticateRepository,
      useClass: JwtService,
    },
  ],
})
export class AuthModule {}
