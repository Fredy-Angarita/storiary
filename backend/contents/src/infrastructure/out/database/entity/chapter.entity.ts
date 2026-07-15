import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GroupEntity } from './group.entity';

@Entity('chapter')
export class ChapterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  chapter_name: string;
  @Column()
  relative_number: number;
  @Column()
  order: number;
  @ManyToOne(() => GroupEntity, (group) => group.chapters)
  group: GroupEntity;
  @CreateDateColumn()
  create_at: Date;
  @DeleteDateColumn()
  delete_at: Date;
}
