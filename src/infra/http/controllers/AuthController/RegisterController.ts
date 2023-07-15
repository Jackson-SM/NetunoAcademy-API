import {
  Body,
  Controller,
  FileTypeValidator,
  HttpStatus,
  ParseFilePipe,
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
export class RegisterController {
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
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ })],
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    file: Express.Multer.File,
  ) {
    const url_upload = await this.serviceImageRepository.uploadImage(file);
    console.log(file);
    return {
      url: url_upload,
    };
  }
}
