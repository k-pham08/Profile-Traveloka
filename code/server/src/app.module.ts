import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import config from "./utils/config.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountModule } from "./account/account.module";
import { CustomerModule } from "./customer/customer.module";
import { PartnerModule } from "./partner/partner.module";

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config), AccountModule, CustomerModule, PartnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
