import { FetchAPI, Method } from "../service/fetchAPI";
import { Service } from "./Service";
import { observable, action } from "mobx";

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
		if (data != null) {
			const {
				userId,
				email,
				username,
				name,
				gender,
				bod,
				phone,
				address,
				type,
				reward,
				services,
				companyName,
			} = data;
			this.userId = userId;
			this.email = email;
			this.username = username;
			this.name = name;
			this.gender = gender;
			this.dob = bod;
			this.phone = phone;
			this.address = address;
			this.type = type;
			this.reward = reward;
			this.services = services;
			this.companyName = companyName;
		}
	}

	@action set_name(v: string) {
		this.name = v;
	}

	static async getAllUser(id?: string) {
		const [err, data] = await FetchAPI<User[]>(Method.GET, "/api/users");

    @action set_gender(v: boolean) {
        this.gender = v;
    }

	static async getUserById(id: string) {
		const [err, data] = await FetchAPI<User>(
			Method.GET,
			"/api/users/" + id
		);

        return [err, data] as const;
    }

	static async getTypes() {
		const [err, data] = await FetchAPI<string[]>(
			Method.GET,
			"/api/users/types"
		);

		return [err, data] as const;
	}

	static async updateUser(data: any) {
		const user = new User(data);
		console.log(user);
		// FetchAPI
	}

	static async getMe() {
		const [err, data] = await FetchAPI<User>(Method.GET, "/api/users/me");

		return [err, data] as const;
	}
}
