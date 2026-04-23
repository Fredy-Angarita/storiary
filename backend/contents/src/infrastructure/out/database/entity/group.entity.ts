import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GroupTypeEntity } from './group-type.entity';
import { TitleEntity } from './title.entity';

@Entity('group')
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  group_name: string;
  @Column()
  description: string;
  @Column()
  order: number;
  @Column()
  total_chapters: number;
  @ManyToOne(() => TitleEntity, (title) => title.group)
  title: TitleEntity;
  @ManyToOne(() => GroupTypeEntity, (type) => type.group)
  type: GroupTypeEntity;
  @CreateDateColumn()
  create_at: Date;
  @DeleteDateColumn()
  delete_at: Date;
}
