import {FetchAPI, Method} from "../service/fetchAPI";
import {Service} from "./Service";
import {action, makeObservable, observable} from "mobx";

export class User {
    @observable
    userId: string;
    @observable
    email: string;
    @observable
    username: string;
    @observable
    name: string;
    @observable
    gender: boolean;
    @observable
    dob: Date;
    @observable
    phone: string;
    @observable
    address: string;
    @observable
    type: string;
    @observable
    reward: number;
    @observable
    services: Service[];
    @observable
    companyName: string;
    @observable
    access_token: string;

    constructor(data?: any) {
        this.userId = "";
        this.email = "";
        this.username = "";
        this.name = "";
        this.gender = false;
        this.dob = new Date();
        this.phone = "";
        this.address = "";
        this.type = "";
        this.reward = 0;
        this.companyName = "";
        this.services = [];
        this.access_token = "";
        if (data != null) {
            const {
                userId,
                email,
                username,
                name,
                gender,
                dob,
                phone,
                address,
                type,
                reward,
                services,
                companyName
            } = data;
            this.userId = userId;
            this.email = email;
            this.username = username;
            this.name = name;
            this.gender = gender;
            this.dob = new Date(dob);
            this.phone = phone;
            this.address = address;
            this.type = type;
            this.reward = reward;
            this.services = services;
            this.companyName = companyName;
        }
        makeObservable(this);
    }

    @action set_name(v: string) {
        this.name = v;
    }

    @action set_gender(v: boolean) {
        this.gender = v;
    }

    static async getAllUser(id?: string) {
        const [err, data] = await FetchAPI<User[]>(Method.GET, "/users");

        return [err, data] as const;
    }

    static async getUserById(id: string) {
        const [err, data] = await FetchAPI<User>(
            Method.GET,
            "/users/" + id
        );

        return [err, data] as const;
    }

    static async getTypes() {
        const [err, data] = await FetchAPI<string[]>(
            Method.GET,
            "/users/types"
        );

        return [err, data] as const;
    }

    static async getMe() {
        const [err, data] = await FetchAPI<User>(Method.GET, "/users/me");

        return [err, data] as const;
    }

    static async update(id: string, user: any) {
        const [err, data] = await FetchAPI<{ message: string }>(Method.PUT, "/users/" + id, user);
        return [err, data] as const;
    }

    static async delete(id: string) {
        const [err, data] = await FetchAPI<{ message: string }>(Method.DELETE, "/users/" + id);
        return [err, data] as const;
    }

    static async changePassword(id: string, new_password: string, old_password: string) {
        const [err, data] = await FetchAPI<{ message: string }>(Method.POST, `/users/${id}/change-password`, {
            new_password,
            old_password
        });
        return [err, data] as const;
    }
}
