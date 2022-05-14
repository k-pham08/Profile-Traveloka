import {action, observable} from "mobx";
import {User} from "../models/User";
import {clearAll, clearJwtToken, getJwtToken, getRole, setRole} from "../utils/LoginUtils";
import {FetchAPI, Method, setAuthorizationToken} from "../service/fetchAPI";
import {UserRole} from "../models/types";
import {BaseStore} from "./BaseStore";

export class AuthorizedStore {
    @observable.ref currentUser?: User;
    @observable token = "";
    @observable role = UserRole.USER.toString();
    @observable isLoggedIn = false;
    @observable isDone = true;

    checkLogin() {
        if (this.currentUser) return true;

        const authToken = getJwtToken();

        if (!authToken || !this.isDone) return false;

        this.set_isLoggedIn(true);
        const role = getRole();
        if (role)
            this.set_role(role);

        this.setToken(authToken).then((res) => {
            if (res[0]) {
                clearJwtToken();
                // eslint-disable-next-line no-restricted-globals
                location.reload();
            } else {
                this.currentUser = res[1];
            }
        });
        return true;
    }

    async setToken(token: string): Promise<any> {
        this.set_isDone(false);
        setAuthorizationToken(token);
        const [err, data] = await FetchAPI<User>(Method.GET, "/users/me");

        // console.log(err, data)

        if (err) {
            setAuthorizationToken("");
            clearJwtToken();
            this.set_isDone(true);
            return [err, data] as const;
        }

        this.set_role(data.type);
        this.set_token(token);
        this.set_isLoggedIn(true);

        setRole(data.type);

        this.currentUser = data;
        this.set_isDone(true);
        return [err, data] as const;
    }

    @action set_isDone(v: boolean) {
        this.isDone = v;
    }

    @action set_role(v: string) {
        this.role = v;
    }

    @action set_token(v: string) {
        this.token = v;
    }

    @action set_isLoggedIn(v: boolean) {
        this.isLoggedIn = v;
    }

    @action Logout() {
        clearAll();

        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }
}

