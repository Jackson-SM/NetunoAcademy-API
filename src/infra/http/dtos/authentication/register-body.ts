import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export abstract class RegisterBody {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @Length(3, 30)
  password: string;
}
