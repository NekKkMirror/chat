import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Chat } from './chat.entity';
import { User } from './user.entity';

@Entity({
  name: 'messages',
})
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Chat)
  chat: Chat;

  @ManyToOne(() => User)
  author: User;

  @Column()
  text: string;

  @CreateDateColumn()
  createdAt: Date;
}
