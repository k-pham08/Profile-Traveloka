import { Controller, UseGuards, Post, Request, Response, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { secret } from "../utils/constants";
import { userDTO } from "../dtos/userDTO";
import { UserService } from "../user/user.service";
import { ServiceService } from "../service/service.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { ApiTags } from "@nestjs/swagger";
import { UserRoles } from "../enums/roles";
import { Service } from "../entities/Service";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
     constructor(private authService: AuthService, private userService: UserService, private serService: ServiceService) {}

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
          if (!createDto.companyName) {
               createDto.type = UserRoles.USER;
          } else {
               for (let ser of user.services) {
                    const service: Service = await this.serService.findSerByCode(ser);
                    if (service) createDto.services.push(service);
               }
               createDto.type = UserRoles.PARTNER;
          }
          try{
               await this.userService.create(createDto);
               res.json({ success: true, message: "REGISTER_SUCCESS", data: createDto });
          }catch (e) {
               console.log(e);
               throw new InternalServerErrorException({success: false, message: e.message})
          }
     }
}
