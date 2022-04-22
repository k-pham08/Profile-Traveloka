import { Column, Entity, Index } from "typeorm";

@Entity("ACCOUNT", { schema: "dbo" })
export class Account {
     @Column("uniqueidentifier", {
          primary: true,
          name: "account_id",
          default: () => "newid()",
     })
     accountId: string;

     @Column("varchar", { name: "username", length: 255 })
     username: string;

     @Column("varchar", { name: "password", length: 255 })
     password: string;

     @Column("varchar", { name: "type", length: 255 })
     type: string;
}
