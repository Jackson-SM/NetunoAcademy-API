import { Injectable } from '@nestjs/common';
import { Teacher } from 'src/domain/entities/Teacher';
import { TeacherRepository } from 'src/domain/repositories/TeacherRepository';

interface GetTeacherByIdUseCaseRequest {
  id: string;
}

interface GetTeacherByIdUseCaseResponse {
  teacher: Teacher;
}

@Injectable()
export class GetTeacherByIdUseCase {
  constructor(private teacherRepository: TeacherRepository) {}

  async execute(
    request: GetTeacherByIdUseCaseRequest,
  ): Promise<GetTeacherByIdUseCaseResponse> {
    const { id } = request;

    const teacher = await this.teacherRepository.getById(id);

    return {
      teacher,
    };
  }
}
