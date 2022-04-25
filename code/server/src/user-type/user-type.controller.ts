import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { UserTypeService } from "./user-type.service";
import { CreateUserTypeDto } from "./dto/create-user-type.dto";
import { UpdateUserTypeDto } from "./dto/update-user-type.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("User-Type")
@Controller("user-type")
export class UserTypeController {
     constructor(private readonly userTypeService: UserTypeService) {}

     @Get()
     findAll() {
          return this.userTypeService.findAll();
     }

     @Patch(":id")
     update(@Param("id") id: string, @Body() updateUserTypeDto: UpdateUserTypeDto) {
          return this.userTypeService.update(id, updateUserTypeDto);
     }

     @Delete(":id")
     remove(@Param("id") id: string) {
          return this.userTypeService.remove(id);
     }
}
