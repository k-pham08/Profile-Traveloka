import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { config } from "./config.database";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { RewardModule } from "./reward/reward.module";
import { ServiceModule } from "./service/service.module";
import { ServiceClassifyModule } from "./service-classify/service-classify.module";
import { PriceBracketModule } from "./price-bracket/price-bracket.module";
import { UserModule } from "./user/user.module";
import { UserTypeModule } from './user-type/user-type.module';
import { CompanyModule } from './company/company.module';

@Module({
     imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config), AuthModule, RewardModule, ServiceModule, ServiceClassifyModule, PriceBracketModule, UserModule, UserTypeModule, CompanyModule],
     controllers: [AppController],
     providers: [AppService],
})
export class AppModule {}
