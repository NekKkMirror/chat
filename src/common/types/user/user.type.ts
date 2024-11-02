import { TChat } from '@common/types/chat/chat.type';

export type TUser = {
  readonly id: string;
  readonly username: string;
  readonly createdAt: Date;

  readonly chats: TChat[];
};
