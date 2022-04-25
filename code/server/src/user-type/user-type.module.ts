import { Module } from "@nestjs/common";
import { UserTypeService } from "./user-type.service";
import { UserTypeController } from "./user-type.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserType } from "../entities/UserType";

@Module({
     imports: [TypeOrmModule.forFeature([UserType])],
     controllers: [UserTypeController],
     providers: [UserTypeService],
})
export class UserTypeModule {}
