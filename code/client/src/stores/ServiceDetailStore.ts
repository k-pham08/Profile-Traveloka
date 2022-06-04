import {makeObservable, observable} from "mobx";
import {Service} from "../models/Service";

export class ServiceDetailStore {
    constructor() {
        makeObservable(this);
    }
    @observable service: Service = new Service();
}