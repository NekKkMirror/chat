import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@common/entities/user.entity';
import { UsersRepository } from '@modules/users/users.repository';
import { Module } from '@nestjs/common';
import { UsersService } from '@modules/users/users.service';
import { UsersController } from '@modules/users/users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService],
})
export class UsersModule {}
