import { Column, Entity, Index, OneToMany } from "typeorm";
import { ServiceClassify } from "./ServiceClassify";
import { UserSer } from "./UserSer";

@Entity("SERVICE", { schema: "dbo" })
export class Service {
     @Column("uniqueidentifier", { primary: true, name: "service_id" })
     serviceId: string;

     @Column("varchar", { name: "service_code", length: 255 })
     serviceCode: string;

     @OneToMany(() => ServiceClassify, serviceClassify => serviceClassify.service)
     serviceClassifies: ServiceClassify[];

     @OneToMany(() => UserSer, userSer => userSer.service)
     userSers: UserSer[];
}
