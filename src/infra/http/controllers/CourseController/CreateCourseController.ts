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
import { CreateCourseUseCase } from 'src/application/use-cases/courses/create-course-use-case';
import { ServiceImageRepository } from 'src/domain/repositories/ServiceImageRepository';
import { CreateCourseDTO } from '../../dtos/courses/create-course-body';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('courses')
export class CreateCourseController {
  constructor(
    private createCourseUseCase: CreateCourseUseCase,
    private serviceImageRepository: ServiceImageRepository,
  ) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({}),
    }),
  )
  @HttpCode(201)
  async handler(
    @Body() body: CreateCourseDTO,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: /(jpg|jpeg|png)$/ })],
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    file: Express.Multer.File,
  ) {
    const { title, description, teacher } = body;

    const avatar_url = await this.serviceImageRepository.uploadImage(file, {
      folder: `courses`,
    });

    const { course } = await this.createCourseUseCase.execute({
      title,
      description,
      teacher,
      avatar_url,
    });

    return course;
  }
}
