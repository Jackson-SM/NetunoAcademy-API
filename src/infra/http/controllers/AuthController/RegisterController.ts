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
import * as bcrypt from 'bcrypt';

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
    const avatar_url = await this.serviceImageRepository.uploadImage(file);

    const { email, name, password } = body;

    const getSalt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, getSalt);

    const { user: rawUser } = await this.registerUseCase.execute({
      email,
      name,
      password: passwordHash,
      avatar_url,
    });

    const user = UserViewModel.toHttp(rawUser);

    return user;
  }
}
