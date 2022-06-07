import {FetchAPI, Method} from "../service/fetchAPI";
import {action, makeObservable, observable} from "mobx";

export class OrderDetail{
    @observable detailId: string;
    @observable productName: string;
    @observable quantity: number;
    @observable price: number;
    @observable thumbnail: string;
    @observable link: string;
    @observable orderId: string;

    constructor(data?: any){
        this.detailId = "";
        this.productName = "";
        this.quantity = 0;
        this.price = 0;
        this.thumbnail = "";
        this.link = "";
        this.orderId = "";
        makeObservable(this)
    }
}