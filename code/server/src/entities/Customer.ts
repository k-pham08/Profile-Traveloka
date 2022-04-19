import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Account } from "./Account";

@Entity("Customer", { schema: "dbo" })
export class Customer {
  @Column("uniqueidentifier", {
    primary: true,
    name: "customer_id",
    default: () => "newid()",
  })
  customerId: string;

  @Column("nvarchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("bit", { name: "gender", nullable: true })
  gender: boolean | null;

  @Column("datetime", { name: "birthday", nullable: true })
  birthday: Date | null;

  @Column("nvarchar", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("numeric", { name: "phone", nullable: true, precision: 11, scale: 0 })
  phone: number | null;

  @Column("uniqueidentifier", { name: "account_id" })
  accountId: string;

  @OneToOne(() => Account, account => account.customer)
  @JoinColumn([{ name: "customer_id", referencedColumnName: "accountId" }])
  customer: Account;
}
