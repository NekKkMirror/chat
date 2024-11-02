import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { TCreateUser } from '@common/types/user/user.create.type';
import { TUser } from '@common/types/user/user.type';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async save(payload: TCreateUser): Promise<TUser> {
    return this.usersRepository.createAndSave(payload);
  }
}
