import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Customer } from "../entities/Customer";
import { Partner } from "../entities/Partner";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
     constructor(private authService: AuthService) {
          super();
     }

     async validate(username: string, password: string): Promise<Customer | Partner> {
          const user: Customer | Partner = await this.authService.validationAccount(username, password);
          if (!user) {
               throw new UnauthorizedException();
          }
          return user;
     }
}
