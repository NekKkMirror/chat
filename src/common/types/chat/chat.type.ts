import { TUser } from '@common/types/user/user.type';

export type TChat = {
  readonly id: string;
  readonly name: string;
  readonly createdAt: Date;

  readonly users: TUser[];
};
