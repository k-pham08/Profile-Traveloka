import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/Order';
import { OrderDetail } from '../entities/OrderDetail';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>
  ){}
  create(createOrderDetailDto: CreateOrderDetailDto) {
    return 'This action adds a new orderDetail';
  }

  findAll() {
    return this.orderDetailRepository.find();
  }

  async findOfOrder(id) {
    const order = await this.orderRepository.findOneBy({orderId: id});
    return await this.orderDetailRepository.find({where: {order: order}})
  }

  findOne(id: string) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: string, updateOrderDetailDto: UpdateOrderDetailDto) {
    return this.orderDetailRepository.update(id, updateOrderDetailDto);
  }

  remove(id) {
    return this.orderDetailRepository.delete(id);
  }
}
