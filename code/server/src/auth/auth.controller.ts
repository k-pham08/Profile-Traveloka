import { Controller, UseGuards, Post, Body, Request, Response, ConflictException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { secret } from "../utils/constants";
import { userDTO } from "../dtos/userDTO";
import { partnerDTO } from "../dtos/partnerDTO";
import { UserService } from "../user/user.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { UserRoles } from "../enums/roles";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
     constructor(private authService: AuthService, private userService: UserService) {}

     @UseGuards(AuthGuard("local"))
     @Post("login")
     async login(@Request() req) {
          return { success: true, data: await this.authService.login(req.user) };
     }

     @UseGuards(AuthGuard("local"))
     @Post("login-admin")
     async loginAdmin() {}

     @Post("secret")
     async getSecret(@Request() req) {
          return secret;
     }

     @Post("signup")
     async signUp(@Response() res) {
          const { user }: { user: userDTO } = res.locals;

          const userExisted = await this.userService.findOne([{ email: user.email }, { username: user.username }, { phone: user.phone }]);

          if (userExisted) {
               throw new ConflictException(null, "USER_EXISTED");
          }

          const createDto: CreateUserDto = new CreateUserDto(user);
          createDto.companyName == null ? (createDto.type = UserRoles.USER) : (createDto.type = UserRoles.PARTNER);
          await this.userService.create(createDto);
          res.json({ success: true, message: "REGISTER_SUCCESS", data: createDto });
     }
}
