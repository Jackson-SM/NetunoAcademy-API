import { Controller, Post } from '@nestjs/common';

@Controller('courses')
export class CreateCourseController {
  @Post()
  createCourse() {
    return 'create course';
  }
}
