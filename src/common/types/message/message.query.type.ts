import { TCursorQueryType } from '@common/types/cursor/cursor.query.type';

export type TMessagesQuery = TCursorQueryType & {
  readonly chatId: string;
};
