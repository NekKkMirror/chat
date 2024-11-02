import { ChatsRepository } from '@modules/chats/chats.repository';
import { Injectable } from '@nestjs/common';
import { TCreateChat } from '@common/types/chat/chat.create.type';
import { TChat } from '@common/types/chat/chat.type';

@Injectable()
export class ChatsService {
  constructor(private readonly chatsRepository: ChatsRepository) {}

  async save(payload: TCreateChat): Promise<TChat> {
    return this.chatsRepository.createAndSave(payload);
  }
}
