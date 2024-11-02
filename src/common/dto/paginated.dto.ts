import { IsArray } from 'class-validator';
import { PaginatedMetaDto } from './paginated-meta.dto';

export abstract class PaginatedDto<T> {
  @IsArray()
  readonly data: T[];

  readonly meta: PaginatedMetaDto;

  constructor(res: { data: T[]; meta: PaginatedMetaDto }) {
    this.meta = res.meta;
    this.data = res.data.map(this.instantiate);
  }

  /**
   * Override with methods that instantiate singular entities of resulting DTOs
   *
   * e.g.:
   *
   * class CatsDto extends PaginatedDto<CatDto> {
   *   instantiate(data: CatDto): CatDto {
   *     return new CatDto(data);
   *   }
   * }
   *
   */
  abstract instantiate(data: T): T;
}
