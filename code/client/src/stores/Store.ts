import { SignUpStore } from "./SignUpStore";
import { SignInStore } from "./SignInStore";
import { AuthorizedStore } from "./AuthorizedStore";
import { observable } from "mobx";
import { ProfileStore } from "./ProfileStore";
import {AccountStore} from "./AccountStore";
import {ServiceDetailStore} from "./ServiceDetailStore";
import { OrderStore } from "./OrderStore";
import { OrderDetailStore } from "./OrderDetailStore";

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
	@observable
	sOrder = new OrderStore();
	@observable
	sOrderDetail = new OrderDetailStore();
}
