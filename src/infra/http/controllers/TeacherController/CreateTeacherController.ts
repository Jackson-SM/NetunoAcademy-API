import {
  Body,
  Controller,
  FileTypeValidator,
  HttpCode,
  HttpStatus,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CreateTeacherUseCase } from 'src/application/use-cases/teacher/create-teacher-use-case';
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';
import { CreateTeacherDTO } from '../../dtos/teacher/CreateTeacherDTO';
import { TeacherViewModel } from '../../view-models/TeacherViewModel';

@Controller('teachers')
export class CreateTeacherController {
  constructor(
    private createTeacherUseCase: CreateTeacherUseCase,
    private serviceImageRepository: ServiceImageRepository,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({}),
    }),
  )
  @HttpCode(HttpStatus.CREATED)
  async handler(
    @Body() body: CreateTeacherDTO,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ })],
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    avatar: Express.Multer.File,
  ) {
    const { name, email, age, training, stacks, description } = body;

    const avatarUrl = await this.serviceImageRepository.uploadImage(avatar, {
      folder: 'teachers',
    });

    const { teacher } = await this.createTeacherUseCase.execute({
      name,
      email,
      age,
      training,
      stacks,
      description,
      photo: avatarUrl,
    });

    return TeacherViewModel.toHttp(teacher);
  }
}
