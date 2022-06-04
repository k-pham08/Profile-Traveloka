import { SignUpStore } from "./SignUpStore";
import { SignInStore } from "./SignInStore";
import { AuthorizedStore } from "./AuthorizedStore";
import { observable } from "mobx";
import { ProfileStore } from "./ProfileStore";
import {AccountStore} from "./AccountStore";
import {ServiceDetailStore} from "./ServiceDetailStore";

export class Store extends AuthorizedStore {
	@observable
	sSignIn = new SignInStore();
	@observable
	sSignUp = new SignUpStore();
	@observable
	sProfile = new ProfileStore();
	@observable
	sAccount = new AccountStore();
	@observable
	sServiceDetail = new ServiceDetailStore();
}
