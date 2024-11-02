import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from '@common/entities/chat.entity';
import { Module } from '@nestjs/common';
import { ChatsRepository } from '@modules/chats/chats.repository';
import { ChatsService } from '@modules/chats/chats.service';
import { ChatsController } from '@modules/chats/chats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  controllers: [ChatsController],
  providers: [ChatsRepository, ChatsService],
})
export class ChatsModule {}
