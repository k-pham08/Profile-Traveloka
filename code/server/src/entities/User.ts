import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Company } from "./Company";
import { UserType } from "./UserType";
import { Reward } from "./Reward";

@Entity("USER", { schema: "dbo" })
export class User {
     @Column("uniqueidentifier", { primary: true, name: "user_id", default: () => "newId()" })
     userId: string;

     @Column("varchar", { name: "username", length: 255 })
     username: string;

     @Column("varchar", { name: "password", length: 255 })
     password: string;

     @Column("nvarchar", { name: "name", length: 255 })
     name: string;

     @Column("nvarchar", { name: "email", length: 255 })
     email: string;

     @Column("bit", { name: "gender" })
     gender: boolean;

     @Column("datetime", { name: "dob" })
     dob: Date;

     @Column("nvarchar", { name: "address", length: 255 })
     address: string;

     @Column("nvarchar", { name: "job", length: 255 })
     job: string;

     @ManyToOne(() => Company, company => company.users)
     @JoinColumn([{ name: "companyId", referencedColumnName: "companyId" }])
     companyCompany: Company;

     @OneToOne(() => UserType, userType => userType.user)
     @JoinColumn([{ name: "typeId", referencedColumnName: "typeId" }])
     typeType: UserType;

     @OneToOne(() => Reward, reward => reward.user)
     @JoinColumn([{ name: "rewardUserId", referencedColumnName: "userId" }])
     rewardUser: Reward;
}
