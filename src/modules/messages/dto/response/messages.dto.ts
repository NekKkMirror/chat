import { PaginatedDto } from '@common/dto/paginated.dto';
import { TMessage } from '@common/types/message/message.type';
import { MessageDto } from '@modules/messages/dto/response/message.dto';

export class MessagesDto extends PaginatedDto<MessageDto> {
  instantiate(data: TMessage): MessageDto {
    return new MessageDto(data);
  }
}
