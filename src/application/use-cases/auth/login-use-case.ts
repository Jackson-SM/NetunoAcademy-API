import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { AuthRepository } from 'src/domain/repositories/AuthRepository';
import { ServiceAuthenticateRepository } from 'src/domain/repositories/ServiceAuthenticateRepository';

interface LoginUseCaseRequest {
  email: string;
  password: string;
}

interface LoginUseCaseResponse {
  user: User;
  token: string;
}

@Injectable()
export class LoginUseCase {
  constructor(
    private authRepository: AuthRepository,
    private serviceAuthenticateRepository: ServiceAuthenticateRepository,
  ) {}

  async execute(request: LoginUseCaseRequest): Promise<LoginUseCaseResponse> {
    const { email, password } = request;

    const user = await this.authRepository.login(email, password);

    const token = await this.serviceAuthenticateRepository.authenticate(user);

    return {
      user,
      token,
    };
  }
}
