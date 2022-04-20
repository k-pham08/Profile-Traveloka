import { md5 } from "md5";
import { Injectable } from "@nestjs/common";
import { AccountService } from "../account/account.service";
import { Customer } from "../entities/Customer";
import { Partner } from "../entities/Partner";
import { PartnerService } from "../partner/partner.service";
import { CustomerService } from "../customer/customer.service";
import { Account } from "../entities/Account";

@Injectable()
export class AuthService {
     constructor(private accountService: AccountService, private partnerService: PartnerService, private customerService: CustomerService) {}

     async validationAccount(user: string, pass: string): Promise<Customer | Partner> {
          const account: Account = await this.accountService.findByUsername(user);

          if (account.password == md5(pass)) {
               return account.type == "CUSTOMER" ? this.customerService.findByAccountId(account.accountId) : this.partnerService.findByAccountId(account.accountId);
          }

          return null;
     }
}
