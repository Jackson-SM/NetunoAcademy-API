import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { RegisterUseCase } from 'src/application/use-cases/auth/register-use-case';
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';
import { CloudinaryService } from 'src/application/services/image-service/cloudinary.service';
import { RegisterController } from './RegisterController';

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterController],
  providers: [
    RegisterUseCase,
    {
      provide: ServiceImageRepository,
      useClass: CloudinaryService,
    },
  ],
})
export class AuthModule {}
