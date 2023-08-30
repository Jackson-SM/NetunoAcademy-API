import { Module } from '@nestjs/common';
import { GetUserByIdController } from './GetUserByIdController';
import { GetUserByIdCase } from 'src/application/use-cases/users/get-user-by-id-case';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [GetUserByIdController],
  providers: [GetUserByIdCase],
  exports: [],
})
export class UserModule {}
