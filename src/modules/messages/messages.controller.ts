import { MessagesService } from '@modules/messages/messages.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { CreateMessageDto } from '@modules/messages/dto/request/create-message.dto';
import { MessageDto } from '@modules/messages/dto/response/message.dto';
import { MessagesQueryDto } from '@modules/messages/dto/request/messages.query.dto';
import { MessagesDto } from '@modules/messages/dto/response/messages.dto';
import { TMessage } from '@common/types/message/message.type';

@Controller('api/v1/messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async getWithCursor(@Query() query: MessagesQueryDto): Promise<MessagesDto> {
    const res = await this.messagesService.getWithCursor(query);

    return new MessagesDto(res);
  }

  @Post()
  async save(@Body() payload: CreateMessageDto): Promise<Pick<TMessage, 'id'>> {
    const { id } = await this.messagesService.save(payload);

    return { id };
  }
}
