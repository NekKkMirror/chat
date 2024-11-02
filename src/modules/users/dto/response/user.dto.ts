import { TUser } from '@common/types/user/user.type';
import { TChat } from '@common/types/chat/chat.type';
import { Exclude, Expose, Type } from 'class-transformer';
import { ChatDto } from '@modules/chats/dto/response/chat.dto';

@Exclude()
export class UserDto {
  @Expose()
  readonly id: string;

  constructor(user: TUser) {
    Object.assign(this, user);
  }
}
