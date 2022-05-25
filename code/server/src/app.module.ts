import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import {config} from "./config.database";
import { TypeOrmModule } from "@nestjs/typeorm";
import { routers } from "./routers.config";
import { RouterModule } from "@nestjs/core";

@Module({
     imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config), RouterModule.register(routers)],
     controllers: [AppController],
     providers: [AppService],
})
export class AppModule {}
