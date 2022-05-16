import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { PriceBracketService } from "./price-bracket.service";
import { CreatePriceBracketDto } from "./dto/create-price-bracket.dto";
import { UpdatePriceBracketDto } from "./dto/update-price-bracket.dto";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "../decorators/role.decorator";
import { UserRoles } from "../enums/roles";

@ApiTags("Price-Bracket")
@Controller("price-bracket")
export class PriceBracketController {
     constructor(private readonly priceBracketService: PriceBracketService) {}

     @Post()
     @Roles(UserRoles.ADMIN)
     create(@Body() createPriceBracketDto: CreatePriceBracketDto) {
          return this.priceBracketService.create(createPriceBracketDto);
     }

     @Get()
     @Roles(UserRoles.ADMIN)
     findAll() {
          return this.priceBracketService.findAll();
     }

     @Get(":id")
     @Roles(UserRoles.ADMIN)
     findOne(@Param("id") id: string) {
          return this.priceBracketService.findOne(id);
     }

     @Patch(":id")
     @Roles(UserRoles.ADMIN)
     update(@Param("id") id: string, @Body() updatePriceBracketDto: UpdatePriceBracketDto) {
          return this.priceBracketService.update(id, updatePriceBracketDto);
     }

     @Delete(":id")
     @Roles(UserRoles.ADMIN)
     remove(@Param("id") id: string) {
          return this.priceBracketService.remove(id);
     }
}
