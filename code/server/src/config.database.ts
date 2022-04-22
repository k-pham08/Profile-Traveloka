import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

export const config: SqlServerConnectionOptions = {
     type: "mssql",
     host: "localhost",
     port: 1433,
     username: "khoapham-08",
     password: "khoapham08",
     database: "Profile",
     entities: ["dist/entities/*.js"],
     synchronize: true,
};
