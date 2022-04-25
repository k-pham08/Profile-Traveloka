import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "../entities/User";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
     constructor(private authService: AuthService) {
          super();
     }

     async validate(username: string, password: string): Promise<User> {
          const user: User = await this.authService.validationAccount(username, password);
          if (!user) {
               throw new UnauthorizedException();
          }
          return user;
     }
}
