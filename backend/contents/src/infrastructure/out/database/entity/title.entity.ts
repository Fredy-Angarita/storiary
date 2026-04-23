import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TitleTypeEntity } from './title-type.entity';
@Entity('title')
export class TitleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @ManyToOne(() => TitleTypeEntity, (type) => type.title)
  type: TitleTypeEntity;
  @CreateDateColumn()
  create_at: string;
  @DeleteDateColumn()
  delete_at: string;
}
