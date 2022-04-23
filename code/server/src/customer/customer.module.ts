import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "../entities/Customer";
import { Account } from "../entities/Account";
import { Reward } from "../entities/Reward";

@Module({
     imports: [TypeOrmModule.forFeature([Customer, Account, Reward])],
     controllers: [CustomerController],
     providers: [CustomerService],
     exports: [CustomerService],
})
export class CustomerModule {}
