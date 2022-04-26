import { privateKey } from "./../utils/constants";
import { Controller, UseGuards, Post, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { secret } from "../utils/constants";

@Controller("auth")
export class AuthController {
     constructor(private authService: AuthService) {}

     @UseGuards(AuthGuard("local"))
     @Post("login")
     async login(@Request() req) {
          return this.authService.login(req.user);
     }

     @Post("private")
     async getSecret(@Request() req) {
          return privateKey;
     }
}
