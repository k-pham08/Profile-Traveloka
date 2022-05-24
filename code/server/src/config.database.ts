import { SqljsConnectionOptions } from "typeorm/driver/sqljs/SqljsConnectionOptions";
import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

export const config: SqlServerConnectionOptions = {
     type: "mssql",
     host: "139.59.104.129",
     port: 1433,
     username: "sa",
     password: "Qq123456789",
     database: "Profile",
     entities: ["dist/entities/*.js"],
     synchronize: true,
};

export const configTest: SqlServerConnectionOptions = {
     type: "mssql",
     host: "localhost",
     port: 1433,
     username: "khoapham-08",
     password: "khoapham08",
     database: "Profile",
     entities: ["dist/entities/*.js"],
     synchronize: true,
};
