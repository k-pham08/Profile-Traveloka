import { Module } from "@nestjs/common";
import { PartnerService } from "./partner.service";
import { PartnerController } from "./partner.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Partner } from "../entities/Partner";
import { Account } from "../entities/Account";
import { Service } from "../entities/Service";

@Module({
     imports: [TypeOrmModule.forFeature([Partner, Account, Service])],
     controllers: [PartnerController],
     providers: [PartnerService],
     exports: [PartnerService],
})
export class PartnerModule {}
