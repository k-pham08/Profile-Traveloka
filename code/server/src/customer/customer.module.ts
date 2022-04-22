import { Module } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CustomerController } from "./customer.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Customer } from "../entities/Customer";
import { Account } from "../entities/Account";

@Module({
     imports: [TypeOrmModule.forFeature([Customer, Account])],
     controllers: [CustomerController],
     providers: [CustomerService],
     exports: [CustomerService],
})
export class CustomerModule {}
