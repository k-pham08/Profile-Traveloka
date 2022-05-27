import { action, makeObservable, observable } from "mobx";
import { FetchAPI, Method } from "../service/fetchAPI";
import { User } from "../models/User";

export class SignUpStore {
	constructor() {
		makeObservable(this);
	}

	@observable user: User = new User();
	// 0 - Nam
	// 1 - Nữ
	@observable isRegisterPartner = false;
	@observable username: string = "";
	@observable password: string = "";
	@observable confirm: string = "";

	@observable companyName: string = "";
	@observable services: string[] = new Array<string>();

	@action set_DOB(newValue: Date) {
		this.user.dob = newValue;
	}

	@action get_User() {
		return this.user;
	}

	@action set_username(v: string) {
		if (v) this.username = v;
	}

	@action set_password(v: string) {
		if (v) this.password = v || "";
	}

	@action set_confirm(v: string) {
		this.confirm = v;
	}

	@action set_companyName(v: string) {
		this.companyName = v;
	}

	@action add_services(v: string) {
		console.log(this);
		this.services.push(v);
	}

	@action remove_service(v: string) {
		let ser = this.services.indexOf(v);
		this.services.splice(ser, 1);
	}

	@action set_isRegisterPartner(v: boolean) {
		this.services = [];
		this.isRegisterPartner = v;
		this.user.companyName = "";
	}

	@action
	async doSignUp() {
		const [err, data] = await FetchAPI<User>(
			Method.POST,
			"/auth/signup",
			{
				...this.user,
				username: this.username,
				password: this.password,
			}
		);

		return [err, data] as const;
	}

	@action
	async convertToPartnerAccount() {
		const [err, data] = await FetchAPI<{ message: string }>(
			Method.POST,
			"/users/"
		);
	}
}
