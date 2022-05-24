import {action, makeObservable, observable} from "mobx";
import {FetchAPI, Method} from "../service/fetchAPI";
import {User} from "../models/User";
import {ServiceStore} from "./ServiceStore";

export class SignUpStore extends ServiceStore {
    constructor() {
        super();
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

    @action set_isRegisterPartner(v: boolean) {
        this.services = [];
        console.log(v)
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
                services: this.services,
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
