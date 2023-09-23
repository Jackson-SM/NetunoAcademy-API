import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  Length,
} from 'class-validator';

export class CreateTeacherDTO {
  @IsNotEmpty()
  @Length(3, 70)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  @IsArray()
  training: string;

  @IsNotEmpty()
  stacks: string[];

  @IsNotEmpty()
  description: string;
}
