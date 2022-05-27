import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity("ORDER", { schema: "dbo" })
export class Order {
    @Column("uniqueidentifier", { primary: true, name: "order_id" })
    orderId: string;

    @Column("datetime", { name: "created_at" })
    createdAt: Date;

    @Column("int", { name: "total" })
    total: number;

    @Column("char", { name: "service_id", length: 10 })
    serviceId: string;

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
    user: User;
}
