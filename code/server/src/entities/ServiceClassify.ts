import { Column, Entity, Index, ManyToMany, ManyToOne } from "typeorm";
import { Service } from "./Service";

@Entity("SERVICE_CLASSIFY", { schema: "dbo" })
export class ServiceClassify {
     @Column("uniqueidentifier", {
          primary: true,
          name: "id",
          default: () => "newid()",
     })
     id: string;

     @Column("nvarchar", { name: "name", length: 255 })
     name: string;

     @ManyToOne(() => Service, service => service.serviceClassify)
     service: Service;
}
