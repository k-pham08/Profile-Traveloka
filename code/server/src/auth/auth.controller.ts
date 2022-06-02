import {
    BadRequestException,
    ConflictException,
    Controller, InternalServerErrorException,
    Param,
    Post,
    Request,
    Response,
    UseGuards
} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {secret} from "../utils/constants";
import {UserService} from "../user/user.service";
import {ServiceService} from "../service/service.service";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {ApiTags} from "@nestjs/swagger";
import {UserRoles} from "../enums/roles";
import {Service} from "../entities/Service";
import {VoucherService} from "../voucher/voucher.service";
import {JwtAuthGuard} from "./jwt-auth.guard";
import {RolesGuard} from "./roles.guard";
import {Roles} from "../decorators/role.decorator";
import {User} from "../entities/User";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService, private serService: ServiceService, private voucherService: VoucherService) {
    }

    @UseGuards(AuthGuard("local"))
    @Post("login")
    async login(@Request() req) {
        return {success: true, data: await this.authService.login(req.user)};
    }

    @Post("login-admin/:id")
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRoles.ADMIN)
    async loginAdmin(@Param("id") id) {
        try {
            const user: User = await this.userService.findUserAuth({userId: id});
            if (!user) {
                throw new BadRequestException({success: false, message: "NOT_FOUND_USER"})
            }
            return {success: true, data: await this.authService.login(user)}
        } catch (e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
    }


    @Post("secret")
    async getSecret(@Request() req) {
        return secret;
    }

    @Post("signup")
    async signUp(@Response() res) {
        const {services, ...user} = res.locals.user;

        // Validation Existed User
        const userExisted = await this.userService.findOne([{email: user.email}, {username: user.username}, {phone: user.phone}]);

        if (userExisted) {
            throw new ConflictException(null, "USER_EXISTED");
        }

        const createDto: CreateUserDto = new CreateUserDto(user);

        // Set Type And Services
        if (!createDto.companyName) {
            createDto.type = UserRoles.USER;
        } else {
            for (let ser of services) {
                const service: Service = await this.serService.findSerByCode(ser);
                if (service) createDto.services.push(service);
            }
            createDto.type = UserRoles.PARTNER;
        }

        try {
            // Create Account for Profile APP
            const data = await this.userService.create(createDto);

            // register to vouchers APP
            await this.voucherService.registerVoucherService(data);

            res.json({success: true, message: "REGISTER_SUCCESS", data});
        } catch (e) {
            console.log(e);
            throw new InternalServerErrorException({success: false, message: e.message})
        }
    }
}
