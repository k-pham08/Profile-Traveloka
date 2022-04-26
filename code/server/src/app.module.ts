import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { config } from "./config.database";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { ServiceModule } from "./service/service.module";
import { ServiceClassifyModule } from "./service-classify/service-classify.module";
import { PriceBracketModule } from "./price-bracket/price-bracket.module";
import { UserModule } from "./user/user.module";
import { CompanyModule } from "./company/company.module";

@Module({
     imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config), AuthModule, ServiceModule, ServiceClassifyModule, PriceBracketModule, UserModule, CompanyModule],
     controllers: [AppController],
     providers: [AppService],
})
export class AppModule {}
