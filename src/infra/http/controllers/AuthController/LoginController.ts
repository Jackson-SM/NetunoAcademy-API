import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginUseCase } from 'src/application/use-cases/auth/login-use-case';
import { LoginBody } from '../../dtos/authentication/login-body';
import { UserViewModel } from '../../view-models/UserViewModel';
import { Response } from 'express';

@Controller('auth')
export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  @Post('/login')
  async register(
    @Body() body: LoginBody,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { email, password } = body;

    const { user, token } = await this.loginUseCase.execute({
      email,
      password,
    });

    const userViewModel = UserViewModel.toHttp(user);

    response.cookie('access-token', token, {
      httpOnly: true,
      secure: true,
    });

    return {
      user: userViewModel,
    };
  }
}
