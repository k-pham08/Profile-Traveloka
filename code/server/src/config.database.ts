import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

export const config: SqlServerConnectionOptions = {
     type: "mssql",
     host: "95.111.203.4",
     port: 1433,
     username: "sa",
     password: "Qq123456789",
     database: "Profile",
     entities: ["dist/entities/*.js"],
     synchronize: true,
};
