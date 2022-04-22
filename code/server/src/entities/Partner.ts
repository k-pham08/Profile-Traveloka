import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { Account } from "./Account";
import { Service } from "./Service";

@Entity("PARTNER", { schema: "dbo" })
export class Partner {
     @Column("uniqueidentifier", {
          primary: true,
          name: "partner_id",
          default: () => "newid()",
     })
     partnerId: string;

     @Column("nvarchar", { name: "name", length: 255 })
     name: string;

     @Column("numeric", { name: "phone", precision: 11, scale: 0 })
     phone: number;

     @Column("varchar", { name: "email", length: 255 })
     email: string;

     @Column("nvarchar", { name: "job", length: 255 })
     job: string;

     @Column("nvarchar", { name: "company_name", length: 255 })
     companyName: string;

     @Column("nvarchar", { name: "country", length: 255 })
     country: string;

     @Column("nvarchar", { name: "office_address", length: 255 })
     officeAddress: string;

     @Column("numeric", { name: "office_phone", precision: 11, scale: 0 })
     officePhone: number;

     @OneToOne(() => Account)
     @JoinColumn()
     partner: Account;

     @ManyToOne(() => Service, (service) => service.partner)
     service: Service
}
