import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Customer } from "./Customer";

@Entity("REWARD", { schema: "dbo" })
export class Reward {
     @Column("uniqueidentifier", {
          primary: true,
          name: "customer_id",
          default: () => "newid()",
     })
     customerId: string;

     @Column("numeric", { name: "reward", precision: 18, scale: 0 })
     reward: number;

     @Column("numeric", { name: "value", precision: 18, scale: 0 })
     value: number;

     @OneToOne(() => Customer)
     @JoinColumn()
     userReward: Customer;
}
