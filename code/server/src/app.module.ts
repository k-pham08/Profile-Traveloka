import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { config } from "./config.database";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { ServiceModule } from "./service/service.module";
import { ServiceClassifyModule } from "./service-classify/service-classify.module";
import { UserModule } from "./user/user.module";
import { RolesGuard } from "./auth/roles.guard";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { SignupMiddleware } from "./auth/middlewares/signup.middleware";

@Module({
     imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config), AuthModule, ServiceModule, ServiceClassifyModule, UserModule],
     controllers: [AppController],
     providers: [AppService],
})
export class AppModule {}
