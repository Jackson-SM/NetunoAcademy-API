import { Injectable } from '@nestjs/common';
import { Teacher } from 'src/domain/entities/Teacher';
import { TeacherRepository } from 'src/domain/repositories/TeacherRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaTeacherRepository implements TeacherRepository {
  constructor(private prisma: PrismaService) {}

  create(teacher: Teacher): Promise<Teacher> {
    throw new Error('Method not implemented.');
  }

  getById(id: string): Promise<Teacher> {
    throw new Error('Method not implemented.');
  }
}
