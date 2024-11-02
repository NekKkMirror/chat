import { TMessage } from '@common/types/message/message.type';

export type TCreateMessage = Pick<TMessage, 'text'> & {
  readonly chatId: string;
  readonly authorId: string;
};
