import { Module } from "@nestjs/common";
import { AccountService } from "./account.service";
import { AccountController } from "./account.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Account } from "../entities/Account";
Account;
@Module({
     imports: [TypeOrmModule.forFeature([Account])],
     controllers: [AccountController],
     providers: [AccountService],
     exports: [AccountService],
})
export class AccountModule {}
