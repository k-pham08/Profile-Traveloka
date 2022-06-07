import { action, makeObservable, observable } from "mobx";
import { Order } from "../models/Order";

export class OrderStore{
    constructor() {
        makeObservable(this);
    }
    @observable orders: Order[] = [];
    
    @action set_orders(v: Order[]){
        this.orders = v;
    }
}