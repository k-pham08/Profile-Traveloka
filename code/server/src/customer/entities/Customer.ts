import { Column, Entity, Index, OneToOne } from "typeorm";
import { Account } from "../../account/entities/Account";

@Index("PK_Customer", ["id"], { unique: true })
@Entity("Customer", { schema: "dbo" })
export class Customer {
  @Column("uniqueidentifier", { primary: true, name: "id" })
  id: string;

  @Column("nchar", { name: "name", nullable: true, length: 10 })
  name: string | null;

  @Column("bit", { name: "gender", nullable: true })
  gender: boolean | null;

  @Column("date", { name: "birthday", nullable: true })
  birthday: Date | null;

  @Column("nchar", { name: "address", nullable: true, length: 10 })
  address: string | null;

  @Column("nchar", { name: "email", nullable: true, length: 10 })
  email: string | null;

  @Column("nchar", { name: "phone", nullable: true, length: 10 })
  phone: string | null;

  @OneToOne(() => Account, account => account[1])
  account: Account;
}
