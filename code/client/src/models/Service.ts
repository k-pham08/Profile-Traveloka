import {observable} from "mobx";
import {Company} from "./Company";
import {ServiceClassify} from "./ServiceClassify";
import {FetchAPI, Method} from "../service/fetchAPI";

export class Service {
    @observable id: string;
    @observable serviceCode: string;
    @observable serviceName: string;
    @observable serviceClassifies: ServiceClassify[]

    constructor(data?: any) {
        this.id = "";
        this.serviceCode = "";
        this.serviceName = "";
        this.serviceClassifies = new Array<ServiceClassify>();
    }

    static async getAll() {
        const [err, data] = await FetchAPI<Service[]>(Method.GET, "/services");
        return [err, data] as const;
    }
}