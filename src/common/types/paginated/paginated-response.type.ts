export type TPaginationMeta = {
  readonly direction: 1 | -1;
  readonly nextCursor: string | null;
  readonly pageSize: number;
  readonly total: number;
};

export type TPaginatedResponse<T> = {
  readonly data: T[];
  readonly meta: TPaginationMeta;
};
