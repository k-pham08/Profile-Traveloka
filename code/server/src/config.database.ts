import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

export const configHost: SqlServerConnectionOptions = {
     type: "mssql",
     host: "95.111.203.4",
     port: 1433,
     username: "sa",
     password: "Qq123456789",
     database: "Profile",
     entities: ["dist/entities/*.js"],
     synchronize: true,
};
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
