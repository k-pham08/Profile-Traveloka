import {Column, CreateDateColumn, Entity, Index, JoinTable, ManyToMany, OneToMany} from "typeorm";
import {Service} from "./Service";
import {DateUtils} from "typeorm/util/DateUtils";
import { Order } from "./Order";

@Entity("USER", {schema: "dbo"})
export class User {
    @Column("uniqueidentifier", {primary: true, name: "user_id", default: () => "newId()"})
    userId: string;

    @Column("varchar", {name: "username", length: 255})
    username: string;

    @Column("varchar", {name: "password", length: 255})
    password: string;

    @Column("nvarchar", {name: "name", length: 255})
    name: string;

    @Column("nvarchar", {name: "email", length: 255})
    email: string;

    @Column("bit", {name: "gender"})
    gender: boolean;

    @Column("datetime", {name: "dob"})
    dob: Date;

    @Column("char", {name: "phone", length: 10})
    phone: string;

    @Column("nvarchar", {name: "address", length: 255})
    address: string;

    @Column("nvarchar", {name: "type", length: 255})
    type: string;

    @Column("int", {name: "reward"})
    reward: number;

    @Column("nvarchar", {name: "company_name", nullable: true, length: 255})
    companyName: string | null;

    @ManyToMany(() => Service)
    @JoinTable()
    services: Service[];

    @OneToMany(() => Order, order => order.user)
    ordersUser: Order[];

    @OneToMany(() => Order, order => order.user)
    ordersPartner: Order[];
}
