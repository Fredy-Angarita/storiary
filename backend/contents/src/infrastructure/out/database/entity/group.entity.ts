import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GroupTypeEntity } from './group-type.entity';
import { TitleEntity } from './title.entity';
import { ChapterEntity } from './chapter.entity';

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
  @OneToMany(() => ChapterEntity, (chapter) => chapter.group)
  chapters: ChapterEntity[];
  @CreateDateColumn()
  create_at: Date;
  @DeleteDateColumn()
  delete_at: Date;
}
