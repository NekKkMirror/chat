import { TChat } from '@common/types/chat/chat.type';

export type TCreateChat = Pick<TChat, 'name'> & {
  readonly usersIds: string[];
};
