import {action, observable} from "mobx";

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

    @action set_email(v: string ) {
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

    @action async doSignUp() {

    }

}
