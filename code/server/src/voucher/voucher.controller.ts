import {Controller, Post, UseGuards, Request, UnauthorizedException, BadRequestException} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {VoucherService} from "./voucher.service";
import {UserRoles} from "../enums/roles";

@Controller('vouchers')
@UseGuards(JwtAuthGuard)
export class VoucherController {
    constructor(private voucherService: VoucherService) {
    }

    @Post()
    async getTokenVoucherService(@Request() req) {
        try {
            const {username, email, type} = req.user;

            if(type == UserRoles.ADMIN) throw new BadRequestException({success: false, message: "ADMIN_NOT_USED_VOUCHER_SERVICE"});

            const {data} = await this.voucherService.login(type == UserRoles.PARTNER ? username : email, type);

            const redirect = (type == UserRoles.PARTNER ? "/partner/auth" : "/user/home") + "?token=" + data.token;

            return {success: true, data: {redirect }}
        } catch(e) {
            throw new UnauthorizedException({success: false, message: e});
        }
    }
}
