export class PaginatedMetaDto {
  direction: 1 | -1;

  nextCursor: string | null;

  pageSize: number;

  total: number;

  constructor(data: PaginatedMetaDto) {
    Object.assign(this, data);
  }
}
