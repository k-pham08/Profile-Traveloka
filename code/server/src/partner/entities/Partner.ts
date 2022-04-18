import { Column, Entity, Index, OneToOne } from "typeorm";
import { Account } from "../../account/entities/Account";

@Index("PK_Partner", ["id"], { unique: true })
@Entity("Partner", { schema: "dbo" })
export class Partner {
  @Column("uniqueidentifier", { primary: true, name: "id" })
  id: string;

  @Column("nchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Column("nchar", { name: "phone", nullable: true, length: 10 })
  phone: string | null;

  @Column("nchar", { name: "email", nullable: true, length: 10 })
  email: string | null;

  @Column("nchar", { name: "job", nullable: true, length: 10 })
  job: string | null;

  @Column("nchar", { name: "company_name", nullable: true, length: 10 })
  companyName: string | null;

  @Column("nchar", { name: "country", nullable: true, length: 10 })
  country: string | null;

  @Column("nchar", { name: "office_address", nullable: true, length: 10 })
  officeAddress: string | null;

  @Column("nchar", { name: "office_phone", nullable: true, length: 10 })
  officePhone: string | null;

  @OneToOne(() => Account, account => account[2])
  account: Account;
}
