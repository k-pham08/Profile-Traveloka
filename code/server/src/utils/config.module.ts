import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export default {
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "khoapham-08",
  password: "khoapham08",
  database: "Profile",
  entities: [],
} as TypeOrmModuleOptions;
