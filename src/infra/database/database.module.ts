import { Module } from '@nestjs/common';
import { AuthRepository } from 'src/domain/repositories/AuthRepository';
import { CourseRepository } from 'src/domain/repositories/CourseRepository';
import { TeacherRepository } from 'src/domain/repositories/TeacherRepository';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAuthRepository } from './prisma/repositories/PrismaAuthRepository';
import { PrismaCourseRepository } from './prisma/repositories/PrismaCourseRepository';
import { PrismaTeacherRepository } from './prisma/repositories/PrismaTeacherRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: AuthRepository,
      useClass: PrismaAuthRepository,
    },
    {
      provide: CourseRepository,
      useClass: PrismaCourseRepository,
    },
    {
      provide: TeacherRepository,
      useClass: PrismaTeacherRepository,
    },
  ],
  exports: [
    UserRepository,
    AuthRepository,
    CourseRepository,
    TeacherRepository,
  ],
})
export class DatabaseModule {}
