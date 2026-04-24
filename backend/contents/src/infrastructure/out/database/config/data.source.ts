import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';
import { GenreEntity } from '../entity/genre.entity';
import { GroupTypeEntity } from '../entity/group.type.entity';
import { TitleTypeEntity } from '../entity/title.type.entity';
import { TitleEntity } from '../entity/title.entity';
import { GroupEntity } from '../entity/group.entity';
import { ChapterEntity } from '../entity/chapter.entity';
dotenv.config();
export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  port: parseInt(process.env.DB_PORT!, 10),
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),
  synchronize: false,
  logging: false,
  entities: [
    GenreEntity,
    GroupTypeEntity,
    TitleTypeEntity,
    TitleEntity,
    GroupEntity,
    ChapterEntity,
  ],
  migrations: [path.join(__dirname, '../migrations/*.{js,ts}')],
};
export const dataSourceInstance = new DataSource(DataSourceConfig);
