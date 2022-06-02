import {action, makeObservable, observable} from "mobx";
import {User} from "../models/User";

export class AccountStore {
    constructor() {
        makeObservable(this);
    }
    @observable users: User[] = [];

    @action set_users(v: User[]) {
        this.users = v;
    }

    @action reloadList(){
        return User.getAllUser();
    }
}