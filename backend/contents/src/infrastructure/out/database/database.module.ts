import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { TitleTypeEntity } from './entity/title.type.entity';
import { GenreEntity } from './entity/genre.entity';
import { ChapterEntity } from './entity/chapter.entity';
import { GroupEntity } from './entity/group.entity';
import { GroupTypeEntity } from './entity/group.type.entity';
import { TitleEntity } from './entity/title.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(DataSourceConfig),
    TypeOrmModule.forFeature([
      TitleTypeEntity,
      GenreEntity,
      ChapterEntity,
      GroupEntity,
      GroupTypeEntity,
      TitleEntity,
    ]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
