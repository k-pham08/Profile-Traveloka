import { md5 } from "md5";
import { Injectable } from "@nestjs/common";
import { User } from "../entities/User";
import { UserService } from "../user/user.service";
import { ApiTags } from "@nestjs/swagger";
@Injectable()
export class AuthService {
     constructor(private userService: UserService) {}
     async validationAccount(user: string, pass: string): Promise<User> {
          const account: User = await this.userService.findByUsername(user);
          if (account.password == md5(pass)) {
               if (account.typeType.name == "CUSTOMER") {
                    return this.userService.findOne(account.userId);
               }
          }
          return null;
     }
}
