import { Module } from "@nestjs/common";
import { ServiceClassifyService } from "./service-classify.service";
import { ServiceClassifyController } from "./service-classify.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceClassify } from "../entities/ServiceClassify";
import { Service } from "../entities/Service";

@Module({
     imports: [TypeOrmModule.forFeature([ServiceClassify, Service])],
     controllers: [ServiceClassifyController],
     providers: [ServiceClassifyService],
})
export class ServiceClassifyModule {}
