import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Account } from "./Account";

@Entity("Partner", { schema: "dbo" })
export class Partner {
  @Column("uniqueidentifier", {
    primary: true,
    name: "partner_id",
    default: () => "newid()",
  })
  partnerId: string;

  @Column("nvarchar", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("numeric", { name: "phone", nullable: true, precision: 11, scale: 0 })
  phone: number | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("nvarchar", { name: "job", nullable: true, length: 255 })
  job: string | null;

  @Column("nvarchar", { name: "company_name", nullable: true, length: 255 })
  companyName: string | null;

  @Column("nvarchar", { name: "country", nullable: true, length: 255 })
  country: string | null;

  @Column("nvarchar", { name: "office_address", nullable: true, length: 255 })
  officeAddress: string | null;

  @Column("numeric", {
    name: "office_phone",
    nullable: true,
    precision: 11,
    scale: 0,
  })
  officePhone: number | null;

  @Column("uniqueidentifier", { name: "account_id" })
  accountId: string;

  @OneToOne(() => Account, account => account.partner)
  @JoinColumn([{ name: "partner_id", referencedColumnName: "accountId" }])
  partner: Account;
}
