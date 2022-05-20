import { action, observable } from "mobx";
import { FetchAPI, Method } from "../service/fetchAPI";
import { User } from "../models/User";

export class SignUpStore {
	@observable fullName: string = "";

	// 0 - Nam
	// 1 - Nữ
	@observable gender: number = 0;
	@observable dob: Date = new Date();
	@observable address: string = "";
	@observable email: string = "";
	@observable phone: string = "";

	@observable username: string = "";
	@observable password: string = "";
	@observable confirm: string = "";

	@observable companyName: string = "";
	@observable services: string[] = [];

	@action set_fullName(v: string) {
		this.fullName = v;
	}

	@action set_gender(v: number) {
		this.gender = v;
	}

	@action set_DOB(v: Date) {
		this.dob = v;
	}

	@action set_address(v: string) {
		this.address = v;
	}

	@action set_email(v: string) {
		this.email = v;
	}

	@action set_phone(v: string) {
		this.phone = v;
	}

	@action set_username(v: string) {
		this.username = v;
	}

	@action set_password(v: string) {
		this.password = v;
	}

	@action set_confirm(v: string) {
		this.confirm = v;
	}

	@action set_companyName(v: string) {
		this.companyName = v;
	}

	@action set_services(v: string) {
		this.services?.push(v);
	}

	@action remove_service(v: string) {
		let ser = this.services.indexOf(v);
		this.services.splice(ser, 1);
	}

	@action async doSignUp() {
		const [err, data] = await FetchAPI<User>(
			Method.POST,
			"/auth/signup",
			{
				username: this.username,
				password: this.password,
				name: this.fullName,
				email: this.email,
				gender: this.gender,
				dob: this.dob,
				phone: this.phone,
				address: this.address,
				companyName: this.companyName,
				services: this.services,
			}
		);

		return [err, data] as const;
	}
}
