import { IsNotEmpty, Length } from 'class-validator';

export class CreateCourseDTO {
  @IsNotEmpty()
  @Length(3, 155)
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  teacher: string;
}
