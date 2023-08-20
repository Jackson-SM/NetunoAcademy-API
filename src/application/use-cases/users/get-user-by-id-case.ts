import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';

interface GetUserByIdCaseRequest {
  id: string;
}

interface GetUserByIdCaseResponse {
  user: User;
}

@Injectable()
export class GetUserByIdCase {
  constructor(private userRepository: UserRepository) {}

  async execute(
    request: GetUserByIdCaseRequest,
  ): Promise<GetUserByIdCaseResponse> {
    const { id } = request;

    const user = await this.userRepository.getById(id);

    return {
      user,
    };
  }
}
