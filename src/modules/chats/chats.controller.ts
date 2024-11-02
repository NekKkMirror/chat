import { ChatDto } from '@modules/chats/dto/response/chat.dto';
import { CreateChatDto } from '@modules/chats/dto/request/create-chat.dto';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ChatsService } from '@modules/chats/chats.service';

@Controller('api/v1/chats')
@UseInterceptors(ClassSerializerInterceptor)
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Post()
  async save(@Body() payload: CreateChatDto): Promise<ChatDto> {
    const user = await this.chatsService.save(payload);
    return new ChatDto(user);
  }
}
