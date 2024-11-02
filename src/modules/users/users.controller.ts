import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from '@modules/users/users.service';
import { CreateUserDto } from '@modules/users/dto/request/create-user.dto';
import { UserDto } from '@modules/users/dto/response/user.dto';

@Controller('api/v1/users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async save(@Body() payload: CreateUserDto): Promise<UserDto> {
    const user = await this.usersService.save(payload);
    return new UserDto(user);
  }
}
