import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserViewModel } from '../../view-models/UserViewModel';
import { GetUserByIdCase } from 'src/application/use-cases/users/get-user-by-id-case';

@Controller('/users')
export class GetUserByIdController {
  constructor(private getUserByIdCase: GetUserByIdCase) {}

  @Get(':id')
  async handler(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    id: string,
  ) {
    const { user } = await this.getUserByIdCase.execute({
      id,
    });
    return UserViewModel.toHttp(user);
  }
}
