import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/User";
import { Company } from "../entities/Company";

@Module({
     imports: [TypeOrmModule.forFeature([User, Company])],
     controllers: [UserController],
     providers: [UserService],
     exports: [UserService],
})

export class UserModule {}
