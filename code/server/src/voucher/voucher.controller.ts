import {Controller, Post, UseGuards, Request, UnauthorizedException, BadRequestException, Get} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {VoucherService} from "./voucher.service";
import {UserRoles} from "../enums/roles";
import {User} from "../entities/User";
import {UserService} from "../user/user.service";

@Controller('vouchers')
// @UseGuards(JwtAuthGuard)
export class VoucherController {
    constructor(private voucherService: VoucherService, private userService: UserService) {
    }

    @Get()
    async signup() {
        const users: User[] = await this.userService.findAll();
        const res: { userId: string, message: object }[] = []
        for (const user of users) {
            try {
                const data = await this.voucherService.registerVoucherService(user);
                res.push({userId: user.userId, message: data})
            } catch (e) {
                console.log(e);
                res.push({userId: user.userId, message: e.message});
            }
        }
        return res;
    }

    @Post()
    async getTokenVoucherService(@Request() req) {
        try {
            const {username, email, type} = req.user;

            if (type == UserRoles.ADMIN) throw new BadRequestException({
                success: false,
                message: "ADMIN_NOT_USED_VOUCHER_SERVICE"
            });

            const {data} = await this.voucherService.login(type == UserRoles.PARTNER ? username : email, type);

            const redirect = (type == UserRoles.PARTNER ? "/partner/auth" : "/user/home") + "?token=" + data.token;

            return {success: true, data: {redirect}}
        } catch (e) {
            throw new UnauthorizedException({success: false, message: e});
        }
    }
}
