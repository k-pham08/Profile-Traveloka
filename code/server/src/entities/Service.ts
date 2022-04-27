import { Column, Entity, Index, OneToMany } from "typeorm";
import { Company } from "./Company";
import { ServiceClassify } from "./ServiceClassify";

@Entity("SERVICE", { schema: "dbo" })
export class Service {
     @Column("uniqueidentifier", {
          primary: true,
          name: "service_id",
          default: () => "newid()",
     })
     serviceId: string;

     @Column("nvarchar", { name: "service_code", length: 255 })
     serviceCode: string;

     @OneToMany(() => Company, company => company.service)
     companies: Company[];

     @OneToMany(() => ServiceClassify, serviceClassify => serviceClassify.service)
     serviceClassifies: ServiceClassify[];
}
