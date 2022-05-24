import {action, makeObservable, observable} from "mobx";
import {User} from "../models/User";

export class ProfileStore {
    @observable username: string = "";
    @observable user: User = new User();
    @observable isView = false;

    constructor() {
        makeObservable(this);
    }

    @action
    set_IsView(v: boolean){
        this.isView = v;
    }
    @action
    set_user(v: User) {
        this.user = v;
    }

    @action
    get_user() {
        return this.user;
    }
}