import { SignUpStore } from "./SignUpStore";
import { SignInStore } from "./SignInStore";
import { AuthorizedStore } from "./AuthorizedStore";
import { observable } from "mobx";
import { PartnerStore } from "./PartnerStore";

export class Store extends AuthorizedStore {
	@observable
	sSignIn = new SignInStore();
	@observable
	sSignUp = new SignUpStore();
	@observable
	sPartner = new PartnerStore();
}
