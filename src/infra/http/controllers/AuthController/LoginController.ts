import { Body, Controller, Post } from '@nestjs/common';
import { LoginUseCase } from 'src/application/use-cases/auth/login-use-case';
import { LoginBody } from '../../dtos/authentication/login-body';
import { UserViewModel } from '../../view-models/UserViewModel';

@Controller('auth')
export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  @Post('/login')
  async register(@Body() body: LoginBody) {
    const { email, password } = body;

    const { user, token } = await this.loginUseCase.execute({
      email,
      password,
    });

    const userViewModel = UserViewModel.toHttp(user);

    return {
      user: userViewModel,
      token,
    };
  }
}
