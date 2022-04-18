import { flatten } from "@nestjs/common";
import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";
import { Account } from "../entities/Account";
import { Customer } from "../entities/Customer";
import { Partner } from "../entities/Partner";

const config: SqlServerConnectionOptions = {
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "khoapham-08",
  password: "khoapham08",
  database: "Profile",
  entities: ["dist/entities/*.js"],
  synchronize: true,
};

export default config;
