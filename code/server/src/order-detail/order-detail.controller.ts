import { Controller, Get, Post, Body, Patch, Param, Delete, Put, InternalServerErrorException } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from '../decorators/role.decorator';
import { UserRoles } from '../enums/roles';

@ApiTags("Order-Detail")
@Controller('order-detail')
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}

  @Post()
  @Roles(UserRoles.ADMIN)
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailService.create(createOrderDetailDto);
  }

  @Get()
  @Roles(UserRoles.SELF)
  findAll() {
    return this.orderDetailService.findAll();
  }

  @Get(':id')
  @Roles(UserRoles.ADMIN)
  findOne(@Param('id') id: string) {
    return this.orderDetailService.findOfOrder(id);
  }

  @Put(':id')
  @Roles(UserRoles.ADMIN)
  async update(@Param('id') id: string, @Body() updateOrderDetailDto: UpdateOrderDetailDto) {
    try {
      await this.orderDetailService.update(id, updateOrderDetailDto);
      return {success: true, message: "Update Successful"}
    } catch (e) {
      throw new InternalServerErrorException({success: false, message: e.message});
    }
  }

  @Delete(':id')
  @Roles(UserRoles.ADMIN)
  async remove(@Param('id') id: string) {
    try {
      await this.orderDetailService.remove(id);
      console.log(id)
      return {success: true, message: "Delete Successful"}
    } catch (e) {
      throw new InternalServerErrorException({success: false, message: e.message})
    }
  }
}
