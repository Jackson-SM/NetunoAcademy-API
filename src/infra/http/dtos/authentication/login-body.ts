import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
