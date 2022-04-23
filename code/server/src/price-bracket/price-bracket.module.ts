import { Module } from "@nestjs/common";
import { PriceBracketService } from "./price-bracket.service";
import { PriceBracketController } from "./price-bracket.controller";
import { PriceBracket } from "../entities/PriceBracket";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceClassify } from "../entities/ServiceClassify";

@Module({
     imports: [TypeOrmModule.forFeature([PriceBracket, ServiceClassify])],
     controllers: [PriceBracketController],
     providers: [PriceBracketService],
})
export class PriceBracketModule {}
