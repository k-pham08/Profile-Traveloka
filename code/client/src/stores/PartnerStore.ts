import { action, observable } from "mobx";
import { Company } from "../models/Company";
import { FetchAPI, Method } from "../service/fetchAPI";

export class PartnerStore {
	@observable fullName: string = "";

	// 0 - Nam
	// 1 - Nữ
	@observable gender: number = 0;
	@observable dob: Date = new Date();
	@observable address: string = "";
	@observable email: string = "";
	@observable phone: string = "";
	@observable companyName: string = "";
	@observable country: string = "";
	@observable companyPhone: string = "";
	@observable companyAddress: string = "";
	@observable service: string = "";

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

	@action set_companyName(v: string) {
		this.companyName = v;
	}

	@action set_country(v: string | undefined) {
		if (v) this.country = v;
		else this.country = "";
	}

	@action set_companyPhone(v: string) {
		this.companyPhone = v;
	}

	@action set_companyAddress(v: string) {
		this.companyAddress = v;
	}

	@action set_service(v: string) {
		this.service = v;
	}

	@action async doPartnerSignUp() {
		const [err, data] = await FetchAPI<Company>(Method.POST, "/company", {
			name: this.fullName,
			gender: this.gender,
			dob: this.dob,
			address: this.address,
			email: this.email,
			phone: this.phone,
			companyName: this.companyName,
			location: this.companyAddress,
			companyPhone: this.companyPhone,
			country: this.country,
			serviceCode: this.service,
		});
		return [err, data] as const;
	}
}
