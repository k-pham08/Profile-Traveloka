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
import {Service} from "./Service";

@Entity("ORDER", { schema: "dbo" })
export class Order {
  @Column("uniqueidentifier", { primary: true, name: "order_id", default: () => "newId()" })
  orderId: string;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("int", { name: "total" })
  total: number;

  @Column("int", { name: "reward"})
  reward: number;

  @Column("nvarchar", { name: "voucher_code", length: 255, nullable: true })
  voucherCode: string;

  @ManyToOne(() => Service, (service) => service.orders)
  @JoinColumn({name: "serviceId"})
  service: Service;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: User;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn([{ name: "partner_id", referencedColumnName: "userId" }])
  partner: User;

  @OneToMany(() => OrderDetail, detail => detail.order)
  orderDetails: OrderDetail[];
}
