import {observable} from "mobx";
import {Company} from "./Company";
import {ServiceClassify} from "./ServiceClassify";
import {FetchAPI, Method} from "../service/fetchAPI";

export class Service {
    @observable id: string;
    @observable serviceCode: string;
    @observable companies: Company[];
    @observable serviceClassifies: ServiceClassify[]

    constructor(data?: any) {
        this.id = "";
        this.serviceCode = "";
        this.companies = new Array<Company>();
        this.serviceClassifies = new Array<ServiceClassify>();
    }

    static async getAll() {
        const [err, data] = await FetchAPI<Service[]>(Method.GET, "/api/services");
        return [err, data] as const;
    }
}