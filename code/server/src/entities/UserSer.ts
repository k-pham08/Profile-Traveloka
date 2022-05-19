import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";
import { Service } from "./Service";

@Entity("UserSer", { schema: "dbo" })
export class UserSer {
     @Column("uniqueidentifier", { primary: true, name: "user_id" })
     userId: string;

     @Column("uniqueidentifier", { primary: true, name: "service_id" })
     serviceId: string;

     @Column("uniqueidentifier", { primary: true, name: "id" })
     id: string;

     @ManyToOne(() => User, user => user.userSers)
     @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
     user: User;

     @ManyToOne(() => Service, service => service.userSers)
     @JoinColumn([{ name: "service_id", referencedColumnName: "serviceId" }])
     service: Service;
}
