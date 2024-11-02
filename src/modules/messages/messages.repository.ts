import { DataSource, Repository } from 'typeorm';
import { TCreateMessage } from '@common/types/message/message.create.type';
import { Message } from '@common/entities/message.entity';
import { Injectable } from '@nestjs/common';
import { TMessagesQuery } from '@common/types/message/message.query.type';
import { TPaginatedResponse } from '@common/types/paginated/paginated-response.type';
import { TMessage } from '@common/types/message/message.type';
import { findPaginated } from '@common/cursor/cursor';
import { User } from '@common/entities/user.entity';

@Injectable()
export class MessagesRepository extends Repository<Message> {
  constructor(dataSource: DataSource) {
    super(Message, dataSource.createEntityManager());
  }

  async getWithCursor(
    query: TMessagesQuery,
  ): Promise<TPaginatedResponse<TMessage>> {
    return findPaginated<Message>(
      this,
      {
        where: { chat: { id: query.chatId } },
        relations: ['author'],
      },
      query,
    );
  }

  async createAndSave(payload: TCreateMessage): Promise<Message> {
    const { chatId, authorId, ...body } = payload;

    return this.save(
      this.create({ ...body, chat: { id: chatId }, author: { id: authorId } }),
    );
  }
}
