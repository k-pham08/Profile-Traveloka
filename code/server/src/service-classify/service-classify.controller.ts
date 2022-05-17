import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ServiceClassifyService } from "./service-classify.service";
import { CreateServiceClassifyDto } from "./dto/create-service-classify.dto";
import { UpdateServiceClassifyDto } from "./dto/update-service-classify.dto";
import { ApiTags } from "@nestjs/swagger";
import { UserRoles } from "../enums/roles";
import { Roles } from "../decorators/role.decorator";

@ApiTags("Service-Classify")
@Controller("service-classify")
export class ServiceClassifyController {
     constructor(private readonly serviceClassifyService: ServiceClassifyService) {}

     @Post()
     @Roles(UserRoles.ADMIN)
     create(@Body() createServiceClassifyDto: CreateServiceClassifyDto) {
          return this.serviceClassifyService.create(createServiceClassifyDto);
     }

     @Get()
     @Roles(UserRoles.ALL)
     findAll() {
          return this.serviceClassifyService.findAll();
     }

     @Get(":id")
     @Roles(UserRoles.ALL)
     findOne(@Param("id") id: string) {
          return this.serviceClassifyService.findOne(id);
     }

     @Patch(":id")
     @Roles(UserRoles.ADMIN)
     update(@Param("id") id: string, @Body() updateServiceClassifyDto: UpdateServiceClassifyDto) {
          return this.serviceClassifyService.update(id, updateServiceClassifyDto);
     }

     @Delete(":id")
     @Roles(UserRoles.ADMIN)
     remove(@Param("id") id: string) {
          return this.serviceClassifyService.remove(id);
     }
}
