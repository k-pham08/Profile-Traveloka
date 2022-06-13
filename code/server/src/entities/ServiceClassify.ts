import {Column, Entity, JoinColumn, ManyToOne} from "typeorm";
import {Service} from "./Service";

@Entity("SERVICE_CLASSIFY", {schema: "dbo"})
export class ServiceClassify {
    @Column("uniqueidentifier", {primary: true, name: "classify_id", default: () => "newId()"})
    classifyId: string;

    @Column("nvarchar", {name: "classify_code", length: 255})
    classifyCode: string;

    @Column("int", {name: "max_price"})
    maxPrice: number;

    @Column("int", {name: "min_price"})
    minPrice: number;

    @ManyToOne(() => Service, service => service.serviceClassifies)
    @JoinColumn([{name: "service_id", referencedColumnName: "serviceId"}])
    service: Service;
}
