import { TUser } from '@common/types/user/user.type';
import { TChat } from '@common/types/chat/chat.type';

export type TMessage = {
  readonly id: string;
  readonly text: string;
  readonly createdAt: Date;

  readonly chat: TChat;
  readonly author: TUser;
};
