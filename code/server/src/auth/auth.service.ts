import { md5 } from "md5";
import { Injectable } from "@nestjs/common";
import { User } from "../entities/User";
import { UserService } from "../user/user.service";
@Injectable()
export class AuthService {
     constructor(private userService: UserService) {}
     async validationAccount(user: string, pass: string): Promise<User> {
          const account: User = await this.userService.findByUserName(user);
          if (account.password == md5(pass)) {
               if (account.type == "CUSTOMER") {
                    return this.userService.findOne(account.userId);
               }
          }
          return null;
     }
}
