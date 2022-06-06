import { Module } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { ServiceController } from "./service.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Service } from "../entities/Service";
import {ServiceClassifyModule} from "../service-classify/service-classify.module";
import {ServiceClassify} from "../entities/ServiceClassify";

@Module({
     imports: [TypeOrmModule.forFeature([Service, ServiceClassify]), ServiceClassifyModule],
     controllers: [ServiceController],
     providers: [ServiceService],
     exports: [ServiceService],
})
export class ServiceModule {}
