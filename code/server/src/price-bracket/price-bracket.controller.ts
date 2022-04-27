import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { PriceBracketService } from "./price-bracket.service";
import { CreatePriceBracketDto } from "./dto/create-price-bracket.dto";
import { UpdatePriceBracketDto } from "./dto/update-price-bracket.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Price-Bracket")
@Controller("price-bracket")
export class PriceBracketController {
     constructor(private readonly priceBracketService: PriceBracketService) {}

     @Post()
     create(@Body() createPriceBracketDto: CreatePriceBracketDto) {
          return this.priceBracketService.create(createPriceBracketDto);
     }

     @Get()
     findAll() {
          return this.priceBracketService.findAll();
     }

     @Get(":id")
     findOne(@Param("id") id: string) {
          return this.priceBracketService.findOne(id);
     }

     @Patch(":id")
     update(@Param("id") id: string, @Body() updatePriceBracketDto: UpdatePriceBracketDto) {
          return this.priceBracketService.update(id, updatePriceBracketDto);
     }

     @Delete(":id")
     remove(@Param("id") id: string) {
          return this.priceBracketService.remove(id);
     }
}
