import { Column, Entity, Index, OneToOne } from "typeorm";
import { User } from "./User";

@Entity("REWARD", { schema: "dbo" })
export class Reward {
     @Column("uniqueidentifier", {
          primary: true,
          name: "user_id",
          default: () => "newid()",
     })
     userId: string;

     @Column("numeric", { name: "reward", precision: 18, scale: 0 })
     reward: number;

     @Column("numeric", { name: "value", precision: 18, scale: 0 })
     value: number;

     @OneToOne(() => User, user => user.rewardUser)
     user: User;
}
