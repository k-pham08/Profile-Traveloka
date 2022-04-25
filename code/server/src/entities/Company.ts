import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Service } from "./Service";
import { User } from "./User";

@Entity("COMPANY", { schema: "dbo" })
export class Company {
     @Column("uniqueidentifier", { primary: true, name: "company_id", default: () => "newId()" })
     companyId: string;

     @Column("nvarchar", { name: "name", length: 255 })
     name: string;

     @Column("nvarchar", { name: "location", length: 255 })
     location: string;

     @Column("numeric", { name: "phone", precision: 11, scale: 0 })
     phone: number;

     @Column("nvarchar", { name: "country", length: 255 })
     country: string;

     @ManyToOne(() => Service, service => service.companies)
     @JoinColumn([{ name: "serviceCompanyId", referencedColumnName: "companyId" }])
     serviceCompany: Service;

     @OneToMany(() => User, user => user.companyCompany)
     users: User[];
}
