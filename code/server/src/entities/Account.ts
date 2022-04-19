import { Column, Entity, Index, OneToOne } from "typeorm";
import { Customer } from "./Customer";
import { Partner } from "./Partner";

@Entity("Account", { schema: "dbo" })
export class Account {
  @Column("uniqueidentifier", {
    primary: true,
    name: "account_id",
    default: () => "newid()",
  })
  accountId: string;

  @Column("varchar", { name: "username", nullable: true, length: 10 })
  username: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 10 })
  password: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 10 })
  type: string | null;

  @OneToOne(() => Customer, customer => customer.customer)
  customer: Customer;

  @OneToOne(() => Partner, partner => partner.partner)
  partner: Partner;
}
