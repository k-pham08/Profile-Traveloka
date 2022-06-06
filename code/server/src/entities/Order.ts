import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OrderDetail } from "./OrderDetail";
import { User } from "./User";

@Entity("ORDER", { schema: "dbo" })
export class Order {
  @Column("uniqueidentifier", { primary: true, name: "order_id", default: () => "newId()" })
  orderId: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("int", { name: "total" })
  total: number;

  @Column("int", { name: "reward" })
  reward: number;

  @Column("nvarchar", { name: "voucher_code", length: 255 })
  voucherCode: string;

  @ManyToOne(() => User, (user) => user.ordersUser)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => User, (user) => user.ordersPartner)
  @JoinColumn([{ name: "partner_id", referencedColumnName: "userId" }])
  partner: User;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: OrderDetail[];
}
