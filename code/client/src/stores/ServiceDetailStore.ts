import {action, makeObservable, observable} from "mobx";
import {Service} from "../models/Service";
import {ServiceClassify} from "../models/ServiceClassify";

export class ServiceDetailStore {
    constructor() {
        makeObservable(this);
    }
    @observable service: Service = new Service();
    @observable isCreateNew: boolean = false;

    @action set_service(v: Service){
        this.service = v;
    }

    @action add_Classify(v: ServiceClassify) {
        this.service.serviceClassifies.push(v);
    }

    @action set_isCreateNew(v: boolean){
        this.isCreateNew = v;
    }
}