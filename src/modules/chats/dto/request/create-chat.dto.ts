import {
  IsNotEmpty,
  IsString,
  IsArray,
  ArrayMinSize,
  IsUUID,
} from 'class-validator';

export class CreateChatDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsArray()
  @ArrayMinSize(1)
  @IsUUID(undefined, { each: true })
  readonly usersIds: string[];
}
