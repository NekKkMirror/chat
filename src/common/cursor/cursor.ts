import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from '@common/const/cursor.const';
import { FindManyOptions } from 'typeorm';

export type CursorSubqueryPayload = {
  cursor?: string;
  take?: number;
  order?: any;
};

export type PaginationMeta = {
  direction: 1 | -1;
  pageSize: number;
  total: number;
  nextCursor: string | null;
};

export type FilteredResponseWithCursor<T> = {
  data: T[];
  meta: PaginationMeta;
};

export const findPaginated = async <T>(
  repository: any,
  args: FindManyOptions<T>,
  paginate: CursorSubqueryPayload,
): Promise<FilteredResponseWithCursor<T>> => {
  const { cursor, take, order = { createdAt: 'DESC' } } = paginate;

  const pageSize = Math.min(Math.abs(take || DEFAULT_PAGE_SIZE), MAX_PAGE_SIZE);
  const direction = Math.sign(take || DEFAULT_PAGE_SIZE) > 0 ? 1 : -1;

  const entitiesWithOverstep = await repository.find({
    where: { ...args.where, ...(cursor ? { id: cursor } : {}) },
    order,
    take: pageSize + 1,
    skip: cursor ? 1 : 0,
    relations: args.relations,
  });

  const total = await repository.count(args.where);
  const hasNext = entitiesWithOverstep.length === pageSize + 1;
  const data = hasNext
    ? entitiesWithOverstep.slice(0, -1)
    : entitiesWithOverstep;
  const nextCursor = hasNext ? data[data.length - 1].id : null;

  return {
    data,
    meta: { direction, pageSize, total, nextCursor },
  };
};
