import {Injectable} from "@nestjs/common";
import {User} from "../entities/User";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {md5} from "../utils/md5";

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {
    }

    async validation(user: string, pass: string): Promise<any> {
        const account: User = await this.userService.findByUsername(user);

        if (account && account.password == md5(pass)) {
            const {password, ...result} = account;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {username: user.username, sub: user.userId, type: user.type};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
