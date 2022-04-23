import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Account } from "./Account";
import { Reward } from "./Reward";

@Entity("CUSTOMER", { schema: "dbo" })
export class Customer {
     @Column("uniqueidentifier", {
          primary: true,
          name: "customer_id",
          default: () => "newid()",
     })
     customerId: string;

     @Column("nvarchar", { name: "name", length: 255 })
     name: string;

     @Column("bit", { name: "gender" })
     gender: boolean;

     @Column("datetime", { name: "birthday" })
     birthday: Date;

     @Column("nvarchar", { name: "address", length: 255 })
     address: string;

     @Column("varchar", { name: "email", length: 255 })
     email: string;

     @Column("numeric", { name: "phone", precision: 11, scale: 0 })
     phone: number;

     @OneToOne(() => Account)
     @JoinColumn()
     customer: Account;
}
