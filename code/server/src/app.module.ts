import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { config, configTest } from "./config.database";
import { TypeOrmModule } from "@nestjs/typeorm";
import { routers } from "./routers.config";
import { RouterModule } from "@nestjs/core";
import { AuthModule } from "./auth/auth.module";
import { ServiceClassifyModule } from "./service-classify/service-classify.module";
import { OrderModule } from "./order/order.module";
import { OrderDetailModule } from './order-detail/order-detail.module';

@Module({
     imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(configTest), AuthModule, RouterModule.register(routers), ServiceClassifyModule, OrderModule, OrderDetailModule],
     controllers: [AppController],
     providers: [AppService],
})
export class AppModule {}
