import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Service } from "./Service";
import { User } from "./User";
@Entity("COMPANY", { schema: "dbo" })
export class Company {
     @Column("uniqueidentifier", {
          primary: true,
          name: "company_id",
          default: () => "newid()",
     })
     companyId: string;

     @Column("nvarchar", { name: "name", length: 255 })
     name: string;

     @Column("nvarchar", { name: "location", length: 255 })
     location: string;

     @Column("varchar", { name: "phone", length: 255 })
     phone: number;

     @Column("nvarchar", { name: "country", length: 255 })
     country: string;

     @OneToMany(() => User, user => user.company)
     users: User[];

     @ManyToOne(() => Service, service => service.companies)
     @JoinColumn([{ name: "serviceId", referencedColumnName: "serviceId" }])
     service: Service;
}
