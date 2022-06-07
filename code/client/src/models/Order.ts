import {action, makeObservable, observable} from "mobx";
import {FetchAPI, Method} from "../service/fetchAPI";
import { OrderDetail } from "./OrderDetail";

export class Order {
    @observable orderId: string;
    @observable createdAt: string;
    @observable total: number;
    @observable reward: number;
    @observable voucherCode: string;
    @observable orderDetails: OrderDetail[];

    constructor(data?: any){
        this.orderId="";
        this.createdAt="";
        this.total=0;
        this.reward=0;
        this.voucherCode="";
        this.orderDetails = new Array<OrderDetail>();
        makeObservable(this);
    }

    @action set_orderDetails(v: OrderDetail[]) {
        this.orderDetails = v;
    }

    static async getAll() {
        const[err, data] = await FetchAPI<Order[]>(Method.GET, "/orders");
        return [err, data] as const;
    }

    static async getById(id: string){
        const [err, data] = await FetchAPI<Order>(Method.GET, `/orders/${id}`);
        return [err, data] as const;
    }

    static async update(order: Order){
        const [err, data] = await FetchAPI<{ message: string }>(Method.PUT, `/orders/${order.orderId}`, order);
        return [err, data] as const;
    }
}