import { SignUpStore } from "./SignUpStore";
import {SignInStore} from "./SignInStore";
import {AuthorizedStore} from "./AuthorizedStore";

export class Store extends AuthorizedStore{
	constructor() {
		super();
		this.checkLogin();
	}


	sSignIn = new SignInStore(this);
	sSignUp = new SignUpStore(this);

}
