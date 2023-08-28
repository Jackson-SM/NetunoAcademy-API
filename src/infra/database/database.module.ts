import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';
import { AuthRepository } from 'src/domain/repositories/AuthRepository';
import { PrismaAuthRepository } from './prisma/repositories/PrismaAuthRepository';
import { CourseRepository } from 'src/domain/repositories/CourseRepository';
import { PrismaCourseRepository } from './prisma/repositories/PrismaCourseRepository';

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
  ],
  exports: [UserRepository, AuthRepository, CourseRepository],
})
export class DatabaseModule {}
