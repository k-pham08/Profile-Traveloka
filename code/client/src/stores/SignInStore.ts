import {action, observable} from "mobx";
import {FetchAPI, Method} from "../service/fetchAPI";
import {clearCurrentURL, getCurrentURL, setJwtToken} from "../utils/LoginUtils";

export class SignInStore  {
    private signInRedirect: string = "/";

    @observable username: string = "";
    @observable password: string = "";

    @action set_username(v: string) {
        this.username = v;
    }

    @action set_password(v: string) {
        this.password = v;
    }

    @action
    async doLogin() {
        const [err, data] = await FetchAPI<{ access_token: string }>(Method.POST, "/auth/login", {
            username: this.username,
            password: this.password
        });

        if(!err) {
            setJwtToken(data.access_token);
            const currentUrl = getCurrentURL();
            this.signInRedirect = currentUrl || "/";

            clearCurrentURL();

            window.location.href = this.signInRedirect;
            return;
        }
        return err.message;
    }

}