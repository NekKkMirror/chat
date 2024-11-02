import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  environmentConfig,
  environmentConfigSchema,
} from '@/config/environment.config';
import { TypeOrmConfigModule } from '@modules/typeorm/typeorm.module';
import { UsersModule } from '@modules/users/users.module';
import { ChatsModule } from '@modules/chats/chats.module';
import { MessagesModule } from '@modules/messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [environmentConfig],
      validationSchema: environmentConfigSchema,
      validationOptions: { abortEarly: true },
    }),
    TypeOrmConfigModule,
    UsersModule,
    ChatsModule,
    MessagesModule,
  ],
})
export class AppModule {}
