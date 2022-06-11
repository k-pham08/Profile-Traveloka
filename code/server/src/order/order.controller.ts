import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards, Request, InternalServerErrorException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../decorators/role.decorator';
import { UserRoles } from '../enums/roles';
import e = require('express');
import console = require('console');

@ApiTags("Order")
@Controller("orders")
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @Roles(UserRoles.ADMIN)
  async create(@Body() createOrderDto: CreateOrderDto) {

    let orderIsValid = this.orderService.orderIsValid(createOrderDto);
    let detailsIsValid = this.orderService.detailsIsValid(createOrderDto);
    let userIsValid = await this.orderService.userIsValid(createOrderDto);
    let partnerIsValid = await this.orderService.partnerIsValid(createOrderDto);

    try {
      if(!orderIsValid){
        return {success: false, message: "Order could not be null or empty, number could not <= 0", data: createOrderDto}
      } else if(!detailsIsValid) {
        return {success: false, message: "Details could not be null or empty, number could not <= 0", data: createOrderDto}
      } else if(!userIsValid) {
        return {success: false, message: "Wrong user type or user do not exsist", data: createOrderDto}
      } else if(!partnerIsValid) {
        return {success: false, message: "Wrong partner or partner do not exsist", data: createOrderDto}
      } else {
        const data = await this.orderService.create(createOrderDto);
        return {success: true, data: createOrderDto};
      }
    } catch (e) {
      throw new InternalServerErrorException({success: false, message: e.message})
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRoles.ALL)
  async findAll(@Request() req) {
    try {
        const {userId, type} = req.user;
        const data = await (type == UserRoles.ADMIN ? this.orderService.findAll() : this.orderService.findOfAccount(userId, type));
        return {success: true, data};
    } catch(e) {
        throw new InternalServerErrorException({success: false, message: e.message});
    }
  }

  @Get(":userId")
  async findByAccount(@Param('userId') id: string) {
    try {
      const data = await this.orderService.findByAccount(id);
      return {success: true, data};
    } catch (e) {
      throw new InternalServerErrorException({success: false, message: e.message})
    }
  }

  @Get(':id')
  @Roles(UserRoles.ADMIN)
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.orderService.findOne(id);
      return {success: true, data};
    } catch (e) {
      throw new InternalServerErrorException({success: false, message: e.message});
    }
  }

  @Put(':id')
  @Roles(UserRoles.ADMIN)
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    try {
      await this.orderService.update(id, updateOrderDto);
      return {success: true, message: "Update Order Successful"}
    } catch (e) {
      throw new InternalServerErrorException({success: false, message: e.message})
    }
  }

  @Delete(':id')
  @Roles(UserRoles.ADMIN)
  async remove(@Param('id') id: string) {
    try {
      await this.orderService.remove(id);
      return {success: true, message: "Delete Order Successful"}
    } catch (e) {
      throw new InternalServerErrorException({success: false, message: e.message})
    }
  }
}
