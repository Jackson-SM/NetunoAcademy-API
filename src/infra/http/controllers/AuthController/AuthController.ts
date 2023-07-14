import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RegisterUseCase } from 'src/application/use-cases/auth/register-use-case';
import { RegisterBody } from '../../dtos/register-body';
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('auth')
export class AuthController {
  constructor(
    private registerUseCase: RegisterUseCase,
    private serviceImageRepository: ServiceImageRepository,
  ) {}

  @Post('/register')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({}),
    }),
  )
  async register(
    @Body() body: RegisterBody,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.serviceImageRepository.uploadImage(file);
  }
}
