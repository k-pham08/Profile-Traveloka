import {observable} from "mobx";
import {User} from "./User";
import {Service} from "./Service";

export class Company {
    @observable id: string;
    @observable name: string;
    @observable location: string;
    @observable phone: string;
    @observable country: string;
    @observable employees: User[];
    @observable services: Service;

    constructor(data?: any) {
        this.id = "";
        this.name = "";
        this.location = "";
        this.phone = "";
        this.country = "";
        this.employees = new Array<User>();
        this.services = new Service();
    }
}