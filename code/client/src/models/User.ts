import { observable } from "mobx";
import { Company } from "./Company";
import { FetchAPI, Method } from "../service/fetchAPI";
import { Service } from "./Service";

export class User {
	@observable userId: string;
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
	@observable services: string[];

	constructor(data?: any) {
		this.userId = "";
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
		this.services = new Array<string>();
	}

	static async getAllUser(id?: string) {
		const [err, data] = await FetchAPI<User[]>(Method.GET, "/users");

		return [err, data] as const;
	}

	static async getUserById(id: string) {
		const [err, data] = await FetchAPI<User>(Method.GET, "/users/" + id);

		return [err, data] as const;
	}

	static async getTypes() {
		const [err, data] = await FetchAPI<string[]>(
			Method.GET,
			"/users/types"
		);

		return [err, data] as const;
	}
}
