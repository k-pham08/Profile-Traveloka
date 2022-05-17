import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "../decorators/role.decorator";
import { UserRoles } from "../enums/roles";

@ApiTags("Service")
@Controller("service")
export class ServiceController {
     constructor(private readonly serviceService: ServiceService) {}

     @Post()
     @Roles(UserRoles.ADMIN)
     create(@Body() createServiceDto: CreateServiceDto) {
          return this.serviceService.create(createServiceDto);
     }

     @Get()
     @Roles(UserRoles.ALL)
     findAll() {
          return this.serviceService.findAll();
     }

     @Get(":id")
     @Roles(UserRoles.ALL)
     findOne(@Param("id") id: string) {
          return this.serviceService.findOne(id);
     }

     @Patch(":id")
     @Roles(UserRoles.ADMIN)
     update(@Param("id") id: string, @Body() updateServiceDto: UpdateServiceDto) {
          return this.serviceService.update(id, updateServiceDto);
     }

     @Delete(":id")
     @Roles(UserRoles.ADMIN)
     remove(@Param("id") id: string) {
          return this.serviceService.remove(id);
     }
}
