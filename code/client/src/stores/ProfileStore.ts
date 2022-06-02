import {action, makeObservable, observable} from "mobx";
import {User} from "../models/User";
import {ServiceStore} from "./ServiceStore";

export class ProfileStore extends ServiceStore{
    @observable username: string = "";
    @observable user: User = new User();
    @observable isView = false;

    constructor() {
        super();
        makeObservable(this);
    }

    @action
    set_IsView(v: boolean){
        this.isView = v;
    }
    @action
    set_user(v: User) {
        this.user = v;
        this.services = v.services.map(({serviceCode}) => serviceCode);
    }

    @action
    get_user() {
        return this.user;
    }

    @action
    async updateInfo(){
        const [err, data] = await User.update(this.user.userId, {...this.user, services: this.services});
        return [err, data] as const;
    }
}