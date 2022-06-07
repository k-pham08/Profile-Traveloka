import {action, makeObservable, observable} from "mobx";
import {ServiceClassify} from "./ServiceClassify";
import {FetchAPI, Method} from "../service/fetchAPI";

export class Service {
    @observable serviceId: string;
    @observable serviceCode: string;
    @observable serviceName: string;
    @observable serviceClassifies: ServiceClassify[];

    constructor(data?: any) {
        this.serviceId = "";
        this.serviceCode = "";
        this.serviceName = "";
        this.serviceClassifies = new Array<ServiceClassify>();
        makeObservable(this);
    }

    @action set_serviceClassifies(v: ServiceClassify[]) {
        this.serviceClassifies = v;
    }

    static async getAll() {
        const [err, data] = await FetchAPI<Service[]>(Method.GET, "/services");
        return [err, data] as const;
    }

    static async save(service: Service) {
        const {serviceId,...dto} = service;
        const [err, data] = await FetchAPI<{message: string}>(Method.POST, "/services", dto);
        return [err, data] as const;
    }

    static async getById(id: string) {
        const [err, data] = await FetchAPI<Service>(Method.GET, `/services/${id}`);
        return [err, data] as const;
    }

    static async update(service: Service) {
        const [err, data] = await FetchAPI<{ message: string }>(Method.PUT, "/services/" + service.serviceId, service);
        return [err, data] as const;
    }

    static async delete(serviceId: string) {
        const [err, data] = await FetchAPI<{message: string}>(Method.DELETE, "/services/" + serviceId);

        return [err, data] as const;
    }
}