import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { PriceBracket } from "./PriceBracket";
import { Service } from "./Service";

@Entity("SERVICE_CLASSIFY", { schema: "dbo" })
export class ServiceClassify {
     @Column("uniqueidentifier", {
          primary: true,
          name: "classify_id",
          default: () => "newid()",
     })
     classifyId: string;

     @Column("nvarchar", { name: "name", length: 255 })
     name: string;

     @OneToOne(() => PriceBracket, priceBracket => priceBracket.serClassify)
     priceBracket: PriceBracket;

     @ManyToOne(() => Service, service => service.serviceClassifies)
     @JoinColumn([{ name: "serviceId", referencedColumnName: "serviceId" }])
     service: Service;
}
