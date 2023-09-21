import { Module } from '@nestjs/common';
import { GetTeacherByIdUseCase } from 'src/application/use-cases/teacher/get-teacher-by-id-use-case';
import { DatabaseModule } from 'src/infra/database/database.module';
import { GetTeacherByIdController } from './GetTeacherByIdController';

@Module({
  imports: [DatabaseModule],
  controllers: [GetTeacherByIdController],
  providers: [GetTeacherByIdUseCase],
})
export class TeacherModule {}
