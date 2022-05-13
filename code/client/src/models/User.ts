import {observable, action, toJS, computed} from "mobx";
import {Company} from "./Company";

export class User {
    @observable id: string;
    @observable email: string;
    @observable username: string;
    @observable password: string;
    @observable name: string;
    @observable gender: boolean;
    @observable bod: Date;
    @observable phone: string;
    @observable address: string;
    @observable job: string;
    @observable type: string;
    @observable reward: number;
    @observable company: Company;


    constructor(data?: any) {
        this.id = "";
        this.email = "";
        this.username = "";
        this.password = "";
        this.name = "";
        this.gender = false;
        this.bod = new Date();
        this.phone = "";
        this.address = "";
        this.job = "";
        this.type = "";
        this.reward = 0;
        this.company = new Company();
    }
}
