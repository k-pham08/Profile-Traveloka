import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Company } from "./Company";

@Entity("USER", { schema: "dbo" })
export class User {
     @Column("uniqueidentifier", {
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

     @Column("datetime", { name: "dob" })
     dob: Date;

     @Column("numeric", { name: "phone", precision: 11, scale: 0 })
     phone: number;

     @Column("nvarchar", { name: "address", length: 255 })
     address: string;

     @Column("nvarchar", { name: "job", length: 255 })
     job: string;

     @Column("nvarchar", { name: "type", length: 255 })
     type: string;

     @Column("numeric", { name: "reward", precision: 18, scale: 0 })
     reward: number;

     @ManyToOne(() => Company, company => company.users)
     @JoinColumn([{ name: "companyId", referencedColumnName: "companyId" }])
     company: Company;
}
