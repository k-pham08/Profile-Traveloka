import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";
import { ApiTags } from "@nestjs/swagger";
import { Roles } from "../decorators/role.decorator";
import { UserRoles } from "../enums/roles";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { RolesGuard } from "../auth/roles.guard";

@ApiTags("Service")
@Controller("services")
export class ServiceController {
     constructor(private readonly serviceService: ServiceService) {}

     @Post()
     @UseGuards(JwtAuthGuard, RolesGuard)
     @Roles(UserRoles.ADMIN)
     create(@Body() createServiceDto: CreateServiceDto) {
          return this.serviceService.create(createServiceDto);
     }

     @Get()
     findAll() {
          return this.serviceService.findAll();
     }

     @Get(":id")
     findOne(@Param("id") id: string) {
          return this.serviceService.findOne(id);
     }

     @Put(":id")
     @UseGuards(JwtAuthGuard, RolesGuard)
     @Roles(UserRoles.ADMIN)
     update(@Param("id") id: string, @Body() updateServiceDto: UpdateServiceDto) {
          return this.serviceService.update(id, updateServiceDto);
     }

     @Delete(":id")
     @UseGuards(JwtAuthGuard, RolesGuard)
     @Roles(UserRoles.ADMIN)
     remove(@Param("id") id: string) {
          return this.serviceService.remove(id);
     }
}
