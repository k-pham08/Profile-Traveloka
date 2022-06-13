import {FetchAPI, Method} from "../service/fetchAPI";
import {action, makeAutoObservable, observable} from "mobx";

export class ServiceClassify {
    @observable classifyCode: string;
    @observable classifyId: string;
    @observable maxPrice: number;
    @observable minPrice: number;
    @observable serviceId: string;

    constructor(data?: any) {
        this.classifyCode = "";
        this.classifyId = "";
        this.maxPrice = 0;
        this.minPrice = 0;
        this.serviceId = "";
        makeAutoObservable(this);
    }

    @action set_classifyCode(v: string) {
        this.classifyCode = v;
    }

    static async getByServiceId(id: string) {

    }

    static async update(classify: ServiceClassify) {
        const [err, data] = await FetchAPI<{ message: string }>(Method.PUT, "/service-classify/" + classify.classifyId, classify);
        return [err, data] as const;
    }

    static async delete(id: string) {
        const [err, data] = await FetchAPI<{ message: string }>(Method.DELETE, "/service-classify/" + id);
        return [err, data] as const;
    }

    static async addClassifyService(classify: ServiceClassify, serviceId: string) {
        classify.serviceId = serviceId;
        const [err, data] = await FetchAPI<{ message: string }>(Method.POST, "/service-classify", classify);
        return [err, data] as const;
    }

}