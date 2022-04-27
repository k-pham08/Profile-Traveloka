import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ServiceClassifyService } from "./service-classify.service";
import { CreateServiceClassifyDto } from "./dto/create-service-classify.dto";
import { UpdateServiceClassifyDto } from "./dto/update-service-classify.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Service-Classify")
@Controller("service-classify")
export class ServiceClassifyController {
     constructor(private readonly serviceClassifyService: ServiceClassifyService) {}

     @Post()
     create(@Body() createServiceClassifyDto: CreateServiceClassifyDto) {
          return this.serviceClassifyService.create(createServiceClassifyDto);
     }

     @Get()
     findAll() {
          return this.serviceClassifyService.findAll();
     }

     @Get(":id")
     findOne(@Param("id") id: string) {
          return this.serviceClassifyService.findOne(id);
     }

     @Patch(":id")
     update(@Param("id") id: string, @Body() updateServiceClassifyDto: UpdateServiceClassifyDto) {
          return this.serviceClassifyService.update(id, updateServiceClassifyDto);
     }

     @Delete(":id")
     remove(@Param("id") id: string) {
          return this.serviceClassifyService.remove(id);
     }
}
