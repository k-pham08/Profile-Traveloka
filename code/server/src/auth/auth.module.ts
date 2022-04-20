import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AccountModule } from "../account/account.module";
import { CustomerModule } from "../customer/customer.module";
import { PartnerModule } from "../partner/partner.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./local.strategy";

@Module({
     imports: [AccountModule, PartnerModule, CustomerModule, PassportModule],
     providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
