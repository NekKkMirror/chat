import { Exclude, Expose, Type } from 'class-transformer';
import { TChat } from '@common/types/chat/chat.type';
import { TUser } from '@common/types/user/user.type';
import { UserDto } from '@modules/users/dto/response/user.dto';

@Exclude()
export class ChatDto {
  @Expose()
  readonly id: string;

  constructor(chat: TChat) {
    Object.assign(this, chat);
  }
}
