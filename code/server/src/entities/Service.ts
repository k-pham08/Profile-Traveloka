import { Column, Entity, Index, OneToMany } from "typeorm";
import { ServiceClassify } from "./ServiceClassify";

@Entity("SERVICE", { schema: "dbo" })
export class Service {
     @Column("uniqueidentifier", { primary: true, name: "service_id" })
     serviceId: string;

     @Column("varchar", { name: "service_code", length: 255 })
     serviceCode: string;

     @Column("nvarchar", {name: "service_name", length: 255})
     serviceName: string;

     @OneToMany(() => ServiceClassify, serviceClassify => serviceClassify.service)
     serviceClassifies: ServiceClassify[];
}