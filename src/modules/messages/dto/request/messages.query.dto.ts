import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { CursorRequestDto } from '@common/dto/query/cursor.request.dto';

export class MessagesQueryDto extends CursorRequestDto {
  @IsUUID()
  chatId: string;
}
