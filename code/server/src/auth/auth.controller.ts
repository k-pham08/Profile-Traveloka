import {Controller, UseGuards, Post, Request, Response, ConflictException} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {secret} from "../utils/constants";
import {userDTO} from "../dtos/userDTO";
import {partnerDTO} from "../dtos/partnerDTO";
import {UserService} from "../user/user.service";
import {CompanyService} from "../company/company.service";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {CreateCompanyDto} from "../company/dto/create-company.dto";
import {ApiProperty, ApiTags} from "@nestjs/swagger";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService, private partnerService: CompanyService) {
    }

    @UseGuards(AuthGuard("local"))
    @Post("login")
    async login(@Request() req) {
        return {success: true, data: await this.authService.login(req.user)};
    }

    @UseGuards(AuthGuard("local"))
    @Post("login-admin")
    async loginAdmin(){
        
    }

    @Post("secret")
    async getSecret(@Request() req) {
        return secret;
    }

    @Post("signup")
    async signUp(@Response() res) {
        const {user}: { user: userDTO } = res.locals;

        const userExisted = await this.userService.findOne([{email: user.email}, {username: user.username}, {phone: user.phone}]);

        if (userExisted) {
            throw new ConflictException(null, "USER_EXISTED");
        }

        const createDto: CreateUserDto = new CreateUserDto(user);

        await this.userService.create(createDto);

        res.json({success: true, message: "REGISTER_SUCCESS"});
    }

    @Post("signup-partner")
    async signUpPartner(@Response() res) {
        const {partner}: { partner: partnerDTO } = res.locals;

        const createDto: CreateCompanyDto = new CreateCompanyDto(partner);

        await this.partnerService.create(createDto);

        res.json({success: true, message: "REGISTER_SUCCESS"});
    }
}
