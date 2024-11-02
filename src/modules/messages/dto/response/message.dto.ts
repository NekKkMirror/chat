import { TUser } from '@common/types/user/user.type';
import { TChat } from '@common/types/chat/chat.type';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { TMessage } from '@common/types/message/message.type';
import { ChatDto } from '@modules/chats/dto/response/chat.dto';
import { UserDto } from '@modules/users/dto/response/user.dto';

@Exclude()
export class MessageDto {
  @Expose()
  readonly id: string;

  @Expose()
  readonly text: string;

  @Expose()
  readonly createdAt: Date;

  @Expose()
  @Transform(({ obj }) => obj.author.username)
  readonly username?: string;

  constructor(message: TMessage) {
    Object.assign(this, message);
  }
}
