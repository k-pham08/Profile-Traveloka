import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

export const config: SqlServerConnectionOptions = {
     type: "mssql",
     host: "localhost",
     port: 1434,
     username: "sa",
     password: "Phanthanhvinh@@1",
     database: "Profile",
     entities: ["dist/entities/*.js"],
     synchronize: true,
};
