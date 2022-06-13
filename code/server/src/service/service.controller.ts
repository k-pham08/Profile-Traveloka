import {Controller, Get, Post, Body, Param, Delete, UseGuards, Put, InternalServerErrorException} from "@nestjs/common";
import {ServiceService} from "./service.service";
import {CreateServiceDto} from "./dto/create-service.dto";
import {UpdateServiceDto} from "./dto/update-service.dto";
import {ApiTags} from "@nestjs/swagger";
import {Roles} from "../decorators/role.decorator";
import {UserRoles} from "../enums/roles";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {RolesGuard} from "../auth/roles.guard";
import {Service} from "../entities/Service";
import {ServiceClassifyService} from "../service-classify/service-classify.service";

@ApiTags("Service")
@Controller("services")
export class ServiceController {
    constructor(private readonly serviceService: ServiceService, private readonly classifyService: ServiceClassifyService) {
    }

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRoles.ADMIN)
    async create(@Body() createServiceDto: CreateServiceDto) {
        try {
            const service: Service = await this.serviceService.create(createServiceDto);

            return {success: true, message: "Create Service Successful!"};
        } catch (e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
    }

    @Get()
    async findAll() {
        try {
            const services: Service[] = await this.serviceService.findAll();
            return {success: true, data: services};
        } catch (e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        try {
            const service: Service = await this.serviceService.findOne(id, true);
            return {success: true, data: service};
        } catch (e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
    }

    @Put(":id")
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRoles.ADMIN)
    async update(@Param("id") id: string, @Body() updateServiceDto: UpdateServiceDto) {
        try {
            await this.serviceService.update(id, updateServiceDto);
            return {success: true, message: "Update Service Successful"};
        } catch (e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
    }

    @Delete(":id")
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRoles.ADMIN)
    async remove(@Param("id") id: string) {
        try {
            await this.serviceService.remove(id);
            return {success: true, message: "Delete Service Successful"};
        } catch (e) {
            throw new InternalServerErrorException({success: true, message: e.message});
        }
    }
}
