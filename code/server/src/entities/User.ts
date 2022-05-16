import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { Company } from "./Company";

@Entity("USER", { schema: "dbo" })
export class User {
     @PrimaryColumn("uniqueidentifier", {
          primary: true,
          name: "user_id",
          default: () => "newid()",
     })
     userId: string;

     @Column("varchar", { name: "username", length: 255 })
     username: string;

     @Column("varchar", { name: "password", length: 255 })
     password: string;

     @Column("nvarchar", { name: "name", length: 255 })
     name: string;

     @Column("nvarchar", { name: "email", length: 255 })
     email: string;

     @Column("bit", { name: "gender" })
     gender: boolean;

     @Column("datetime", { name: "bod"})
     bod: Date;

     @Column("char", { name: "phone", length: 10 })
     phone: string;

     @Column("nvarchar", { name: "address", length: 255 })
     address: string;

     @Column("nvarchar", { name: "job", length: 255, nullable: true })
     job: string;

     @Column("nvarchar", { name: "type", length: 255 })
     type: string;

     @Column("numeric", { name: "reward", precision: 18, scale: 0, default: 0})
     reward: number;

     @ManyToOne(() => Company, company => company.users)
     @JoinColumn([{ name: "companyId", referencedColumnName: "companyId" }])
     company: Company;
}
