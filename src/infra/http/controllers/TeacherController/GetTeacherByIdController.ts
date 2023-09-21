import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { GetTeacherByIdUseCase } from 'src/application/use-cases/teacher/get-teacher-by-id-use-case';
import { TeacherViewModel } from '../../view-models/TeacherViewModel';

@Controller('/teachers')
export class GetTeacherByIdController {
  constructor(private getTeacherByIdCase: GetTeacherByIdUseCase) {}

  @Get(':id')
  async handler(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    id: string,
  ) {
    const { teacher } = await this.getTeacherByIdCase.execute({
      id,
    });

    return TeacherViewModel.toHttp(teacher);
  }
}
