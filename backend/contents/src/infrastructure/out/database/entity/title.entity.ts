import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TitleTypeEntity } from './title-type.entity';
import { GenreEntity } from './genre.entity';
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
  @ManyToMany(() => GenreEntity, (genre) => genre.titles)
  @JoinTable({
    name: 'title-genre',
  })
  genres: GenreEntity[];
  @CreateDateColumn()
  create_at: string;
  @DeleteDateColumn()
  delete_at: string;
}
