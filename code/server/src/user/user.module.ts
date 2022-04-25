import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entities/User";
import { UserType } from "../entities/UserType";
import { Company } from "../entities/Company";
import { Reward } from "../entities/Reward";

@Module({
     imports: [TypeOrmModule.forFeature([User, UserType, Company, Reward])],
     controllers: [UserController],
     providers: [UserService],
})
export class UserModule {}
