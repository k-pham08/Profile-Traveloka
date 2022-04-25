import { Column, Entity, Index, OneToOne } from "typeorm";
import { User } from "./User";

@Entity("USER_TYPE", { schema: "dbo" })
export class UserType {
     @Column("uniqueidentifier", {
          primary: true,
          name: "type_id",
          default: () => "newId()",
     })
     typeId: string;

     @Column("nvarchar", { name: "name", nullable: true, length: 255 })
     name: string | null;

     @OneToOne(() => User, user => user.typeType)
     user: User;
}
