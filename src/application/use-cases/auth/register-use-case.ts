import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { AuthRepository } from 'src/domain/repositories/AuthRepository';

interface RegisterUseCaseRequest {
  email: string;
  name: string;
  password: string;
  avatar_url?: string | null;
}

interface RegisterUseCaseResponse {
  user: User;
}

@Injectable()
export class RegisterUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(
    request: RegisterUseCaseRequest,
  ): Promise<RegisterUseCaseResponse> {
    const { email, name, password, avatar_url } = request;

    const user = new User({ email, name, password, avatar_url });

    await this.authRepository.register(user);

    return {
      user,
    };
  }
}
