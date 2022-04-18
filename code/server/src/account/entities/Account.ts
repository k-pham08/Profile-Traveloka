import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Customer } from "../../customer/entities/Customer";
import { Partner } from "../../partner/entities/Partner";

@Index("PK_Account", ["id"], { unique: true })
@Entity("Account", { schema: "dbo" })
export class Account {
  @Column("uniqueidentifier", { primary: true, name: "id" })
  id: string;

  @Column("nchar", { name: "username", nullable: true, length: 255 })
  username: string | null;

  @Column("nchar", { name: "password", nullable: true, length: 255 })
  password: string | null;

  @Column("nchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @OneToOne(() => Customer, customer => customer.account)
  @JoinColumn([{ name: "id", referencedColumnName: "id" }])
  1: Customer;

  @OneToOne(() => Partner, partner => partner.account)
  @JoinColumn([{ name: "id", referencedColumnName: "id" }])
  2: Partner;
}
