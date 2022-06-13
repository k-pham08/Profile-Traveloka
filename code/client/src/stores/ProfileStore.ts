import {action, makeObservable, observable} from "mobx";
import {User} from "../models/User";
import {ServiceStore} from "./ServiceStore";
import {Order} from "../models/Order";

export class ProfileStore extends ServiceStore{
    @observable username: string = "";
    @observable user: User = new User();
    @observable isView: boolean = false;
    @observable isChangePassword: boolean = false;
    @observable new_password: string = "";
    @observable confirm_password: string = "";
    @observable old_password: string = "";
    @observable orders :Order[]= new Array<Order>();

    constructor() {
        super();
        makeObservable(this);
    }

    @action
    set_orders(v: Order[]){
        this.orders = v;
    }

    @action
    set_IsChangePassword(v: boolean) {
        this.isChangePassword = v;
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
    @action
    set_password(value: string) {
        this.new_password = value;
    }
    @action
    set_confirm(value: string) {
        this.confirm_password = value;
    }

    @action
    set_oldPassword(value: string) {
        this.old_password = value;
    }
}