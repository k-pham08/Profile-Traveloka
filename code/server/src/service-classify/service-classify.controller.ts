import {Controller, Get, Post, Body, Patch, Param, Delete, Put, InternalServerErrorException} from "@nestjs/common";
import {ServiceClassifyService} from "./service-classify.service";
import {CreateServiceClassifyDto} from "./dto/create-service-classify.dto";
import {UpdateServiceClassifyDto} from "./dto/update-service-classify.dto";
import {ApiTags} from "@nestjs/swagger";
import {UserRoles} from "../enums/roles";
import {Roles} from "../decorators/role.decorator";

@ApiTags("Service-Classify")
@Controller("service-classify")
export class ServiceClassifyController {
    constructor(private readonly serviceClassifyService: ServiceClassifyService) {
    }

    @Post()
    @Roles(UserRoles.ADMIN)
    async create(@Body() createServiceClassifyDto: CreateServiceClassifyDto) {
        try {
            await this.serviceClassifyService.create(createServiceClassifyDto);
            return {success: true, message: "Add Classify Successful!"};
        } catch (e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
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

    @Put(":id")
    @Roles(UserRoles.ADMIN)
    async update(@Param("id") id: string, @Body() updateServiceClassifyDto: UpdateServiceClassifyDto) {
        try {
            await this.serviceClassifyService.update(id, updateServiceClassifyDto);
            return {success: true, message: "Update Classify Successful"};
        } catch (e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
    }

    @Delete(":id")
    @Roles(UserRoles.ADMIN)
    async remove(@Param("id") id: string) {
        try{
            await this.serviceClassifyService.remove(id);
            return {success: true, message: "Delete Classify Successful"};
        }catch(e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
    }
}
