import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/User";
import {UpdateUserMiddleware} from "./middlewares/update-user.middleware";
import {ServiceModule} from "../service/service.module";
import { AuthModule } from "../auth/auth.module";
import { AuthService } from "../auth/auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";
import { jwtConfig } from "../utils/constants";
import { JwtStrategy } from "../auth/jwt.strategy";
import { LocalStrategy } from "../auth/local.strategy";

@Module({
    imports: [TypeOrmModule.forFeature([User]), ServiceModule, PassportModule, JwtModule.register(jwtConfig as JwtModuleOptions)],
    controllers: [UserController],
    providers: [UserService, AuthService, LocalStrategy, JwtStrategy],
    exports: [UserService],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(UpdateUserMiddleware).forRoutes({path: "/api/users/:id", method: RequestMethod.PUT});
    }
}
