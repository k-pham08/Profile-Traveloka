import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { config } from "./config.database";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountModule } from "./account/account.module";
import { CustomerModule } from "./customer/customer.module";
import { PartnerModule } from "./partner/partner.module";
import { AuthModule } from "./auth/auth.module";
import { RewardModule } from "./reward/reward.module";
import { ServiceModule } from "./service/service.module";
import { ServiceClassifyModule } from './service-classify/service-classify.module';
import { PriceBracketModule } from './price-bracket/price-bracket.module';

@Module({
     imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config), AccountModule, CustomerModule, PartnerModule, AuthModule, RewardModule, ServiceModule, ServiceClassifyModule, PriceBracketModule],
     controllers: [AppController],
     providers: [AppService],
})
export class AppModule {}
