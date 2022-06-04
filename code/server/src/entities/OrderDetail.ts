import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Order } from "./Order";


@Entity("ORDER_DETAIL", { schema: "dbo" })
export class OrderDetail {
  @Column("uniqueidentifier", { primary: true, name: "detail_id", default: () => "newId()" })
  detailId: string;

  @Column("nvarchar", { name: "product_name", length: 255 })
  productName: string;

  @Column("int", { name: "quantity" })
  quantity: number;

  @Column("int", { name: "price" })
  price: number;

  @Column("nvarchar", { name: "thumbnail", nullable: true, length: 255 })
  thumbnail: string | null;

  @Column("nvarchar", { name: "link", nullable: true, length: 255 })
  link: string | null;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  @JoinColumn([{ name: "order_id", referencedColumnName: "orderId" }])
  order: Order;
}
