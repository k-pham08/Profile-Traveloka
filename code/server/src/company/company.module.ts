import { Module } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CompanyController } from "./company.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "../entities/Company";
import { Service } from "../entities/Service";

@Module({
     imports: [TypeOrmModule.forFeature([Company, Service])],
     controllers: [CompanyController],
     providers: [CompanyService],
})
export class CompanyModule {}
