import { IsInt, IsOptional, IsUUID } from 'class-validator';

export class CursorRequestDto {
  @IsOptional()
  @IsUUID()
  cursor?: string;

  @IsOptional()
  @IsInt()
  take?: number;
}
