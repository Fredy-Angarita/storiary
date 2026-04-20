import path from 'path';
import { DataSourceOptions } from 'typeorm';
import dotenv from 'dotenv';
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
  entities: [],
  migrations: [path.join(__dirname, '../migrations/*.{js,ts}')],
};
