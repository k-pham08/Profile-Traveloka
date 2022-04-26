import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { LocalStrategy } from "./local.strategy";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";
import { jwtConfig } from "../utils/constants";
import { AuthController } from "./auth.controller";

@Module({
     imports: [UserModule, PassportModule, JwtModule.register(jwtConfig as JwtModuleOptions)],
     providers: [AuthService, LocalStrategy],
     exports: [AuthService],
     controllers: [AuthController],
})
export class AuthModule {}
