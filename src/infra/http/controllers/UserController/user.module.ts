import { Module } from '@nestjs/common';
import { GetUserByIdController } from './GetUserByIdController';
import { GetUserByIdCase } from 'src/application/use-cases/users/get-user-by-id-case';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { PrismaUserRepository } from 'src/infra/database/prisma/repositories/PrismaUserRepository';

@Module({
  controllers: [GetUserByIdController],
  providers: [
    GetUserByIdCase,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [],
})
export class UserModule {}
