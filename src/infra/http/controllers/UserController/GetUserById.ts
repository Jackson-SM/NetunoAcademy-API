import { Controller, Get, Param } from '@nestjs/common';
import { UserViewModel } from '../../view-models/UserViewModel';
import { GetUserByIdCase } from 'src/application/use-cases/users/get-user-by-id-case';

@Controller('/users')
export class GetUserById {
  constructor(private getUserByIdCase: GetUserByIdCase) {}

  @Get(':id')
  async handler(@Param('id') id: string) {
    const { user } = await this.getUserByIdCase.execute({
      id,
    });
    return UserViewModel.toHttp(user);
  }
}
