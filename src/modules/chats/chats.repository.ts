import { DataSource, Repository } from 'typeorm';
import { TCreateChat } from '@common/types/chat/chat.create.type';
import { Chat } from '@common/entities/chat.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatsRepository extends Repository<Chat> {
  constructor(dataSource: DataSource) {
    super(Chat, dataSource.createEntityManager());
  }

  async createAndSave(payload: TCreateChat): Promise<Chat> {
    const { usersIds, ...body } = payload;
    const users = usersIds.map((userId) => ({ id: userId }));

    return this.save(this.create({ ...body, users }));
  }
}
