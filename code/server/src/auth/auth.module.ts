import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {UserModule} from "../user/user.module";
import {LocalStrategy} from "./local.strategy";
import {JwtModule, JwtModuleOptions} from "@nestjs/jwt";
import {jwtConfig} from "../utils/constants";
import {AuthController} from "./auth.controller";
import {JwtStrategy} from "./jwt.strategy";
import {SignupMiddleware} from "./middlewares/signup.middleware";

@Module({
    imports: [UserModule, PassportModule, JwtModule.register(jwtConfig as JwtModuleOptions)],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
    controllers: [AuthController],
})
export class AuthModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(SignupMiddleware).forRoutes({path: "/auth/signup", method: RequestMethod.POST});
    }
}
