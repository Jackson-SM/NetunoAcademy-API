import { Teacher } from 'src/domain/entities/Teacher';
import { TeacherRepository } from 'src/domain/repositories/TeacherRepository';

interface CreateTeacherUseCaseRequest {
  name: string;
  email: string;
  age: number;
  training: string;
  stacks: string[];
  description: string;
  photo: string;
}

interface CreateTeacherUseCaseResponse {
  teacher: Teacher;
}

export class CreateTeacherUseCase {
  constructor(private teacherRepository: TeacherRepository) {}

  async execute(
    request: CreateTeacherUseCaseRequest,
  ): Promise<CreateTeacherUseCaseResponse> {
    const { name, email, age, training, stacks, description, photo } = request;

    const teacher = new Teacher({
      name,
      email,
      age,
      training,
      stacks,
      description,
      photo,
    });

    await this.teacherRepository.create(teacher);

    return {
      teacher,
    };
  }
}
