import { Repository } from 'typeorm';
import { User } from '@common/entities/user.entity';
import { DataSource } from 'typeorm';
import { TCreateUser } from '@common/types/user/user.create.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createAndSave(payload: TCreateUser): Promise<User> {
    return this.save(this.create(payload));
  }
}
