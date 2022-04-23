import { Column, Entity, OneToMany } from "typeorm";
import { ServiceClassify } from "../entities/ServiceClassify";
import { Partner } from "./Partner";

@Entity("SERVICE", { schema: "dbo" })
export class Service {
     @Column("uniqueidentifier", {
          primary: true,
          name: "service_id",
          default: () => "newid()",
     })
     serviceId: string;

     @Column("nvarchar", { name: "service_name", length: 255 })
     serviceName: string;

     @OneToMany(() => Partner, partner => partner.service)
     partner: Partner[];

     @OneToMany(() => ServiceClassify, serviceClassify => serviceClassify.service)
     serviceClassify: ServiceClassify[];
}
