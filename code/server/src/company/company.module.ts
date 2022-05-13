import { Module } from "@nestjs/common";
import { CompanyService } from "./company.service";
import { CompanyController } from "./company.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "../entities/Company";
import { Service } from "../entities/Service";
import { User } from "../entities/User";

@Module({
     imports: [TypeOrmModule.forFeature([Company, Service, User])],
     controllers: [CompanyController],
     providers: [CompanyService],
})
export class CompanyModule {}
