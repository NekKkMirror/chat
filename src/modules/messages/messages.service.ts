import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '@modules/messages/messages.repository';
import { TCreateMessage } from '@common/types/message/message.create.type';
import { TMessage } from '@common/types/message/message.type';
import { TMessagesQuery } from '@common/types/message/message.query.type';
import { TPaginatedResponse } from '@common/types/paginated/paginated-response.type';

@Injectable()
export class MessagesService {
  constructor(private readonly messagesRepository: MessagesRepository) {}

  async getWithCursor(
    query: TMessagesQuery,
  ): Promise<TPaginatedResponse<TMessage>> {
    return this.messagesRepository.getWithCursor(query);
  }

  async save(payload: TCreateMessage): Promise<TMessage> {
    return this.messagesRepository.createAndSave(payload);
  }
}
