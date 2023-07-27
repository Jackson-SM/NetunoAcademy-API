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
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { RegisterBody } from '../../dtos/authentication/register-body';
import { UserViewModel } from '../../view-models/UserViewModel';

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
    const { email, name, password } = body;

    let avatar_url: string | null;

    if (file) {
      avatar_url = await this.serviceImageRepository.uploadImage(file, {
        folder: `users/${email}`,
        public_id: `${email}-avatar`,
      });
    }

    const { user: rawUser } = await this.registerUseCase.execute({
      email,
      name,
      password,
      avatar_url,
    });

    const user = UserViewModel.toHttp(rawUser);

    return user;
  }
}
