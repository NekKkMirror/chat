import { IsUUID, Length } from 'class-validator';

export class CreateMessageDto {
  @Length(1, 255)
  readonly text: string;

  @IsUUID()
  readonly chatId: string;

  @IsUUID()
  readonly authorId: string;
}
