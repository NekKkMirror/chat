import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Message } from '@common/entities/message.entity';
import { MessagesRepository } from '@modules/messages/messages.repository';
import { MessagesService } from '@modules/messages/messages.service';
import { MessagesController } from '@modules/messages/messages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesService],
})
export class MessagesModule {}
