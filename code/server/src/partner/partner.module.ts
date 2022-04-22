import { Module } from "@nestjs/common";
import { PartnerService } from "./partner.service";
import { PartnerController } from "./partner.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Partner } from "../entities/Partner";
import { Account } from "../entities/Account";

@Module({
     imports: [TypeOrmModule.forFeature([Partner, Account])],
     controllers: [PartnerController],
     providers: [PartnerService],
     exports: [PartnerService],
})
export class PartnerModule {}
