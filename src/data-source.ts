import 'reflect-metadata';
import { DataSource } from 'typeorm';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'containers-us-west-37.railway.app',
  port: 5743,
  username: 'postgres',
  password: 'EassDILNxhopDcXbWgSP',
  database: 'railway',
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});
