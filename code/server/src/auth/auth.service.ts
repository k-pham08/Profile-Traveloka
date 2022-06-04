import {Injectable} from "@nestjs/common";
import {User} from "../entities/User";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import {md5} from "../utils/md5";
import {UserRoles} from "../enums/roles";

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {
    }

    async validation(user: string, pass: string): Promise<any> {
        const account: User = await this.userService.findUserAuth([{username: user}, {email: user}, {phone: user}]);

        if (account && account.password == md5(pass)) {
            const {password, ...result} = account;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const services = user.services ? user.services.map(({serviceCode}) => serviceCode) : [];
        const payload = {
            name: user.type == UserRoles.PARTNER ? user.companyName : user.name,
            username: user.username,
            email: user.email,
            sub: user.userId,
            type: user.type,
            ...(user.type == UserRoles.PARTNER ? {services} : {})
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
