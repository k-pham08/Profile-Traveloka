import {observable} from "mobx";
import {Company} from "./Company";
import {ServiceClassify} from "./ServiceClassify";

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
}