import { Length } from 'class-validator';

export class CreateUserDto {
  @Length(2, 20)
  username: string;
}
