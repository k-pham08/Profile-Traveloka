import { Module } from "@nestjs/common";
import { ServiceClassifyService } from "./service-classify.service";
import { ServiceClassifyController } from "./service-classify.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Service } from "../entities/Service";
import { ServiceClassify } from "../entities/ServiceClassify";

@Module({
     imports: [TypeOrmModule.forFeature([Service, ServiceClassify])],
     controllers: [ServiceClassifyController],
     providers: [ServiceClassifyService],
})
export class ServiceClassifyModule {}
