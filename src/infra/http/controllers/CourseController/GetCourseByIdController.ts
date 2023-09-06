import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { GetCourseByIdUseCase } from 'src/application/use-cases/courses/get-course-by-id-use-case';

@Controller('courses')
export class GetCourseByIdController {
  constructor(private getCourseByIdUseCase: GetCourseByIdUseCase) {}

  @Get(':id')
  async handler(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    id: string,
  ) {
    return `get course by id ${id}`;
  }
}
