import { SignUpStore } from "./SignUpStore";
import {SignInStore} from "./SignInStore";
import {AuthorizedStore} from "./AuthorizedStore";
import {observable} from "mobx";

export class Store extends AuthorizedStore{
	@observable
	sSignIn = new SignInStore();
	@observable
	sSignUp = new SignUpStore();

}
