import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { OrderDetail } from "./OrderDetail";
import { User } from "./User";

@Entity("ORDER", { schema: "dbo" })
export class Order {
    @Column("uniqueidentifier", { primary: true, name: "order_id" })
    orderId: string;

    @Column("datetime", { name: "created_at" })
    createdAt: Date;

    @Column("int", { name: "total" })
    total: number;

    @Column("int", { name: "reward" })
    reward: number;

    @Column("char", { name: "service_id", length: 10 })
    serviceId: string;

    @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
    orderDetails: OrderDetail[];

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
    user: User;
}
