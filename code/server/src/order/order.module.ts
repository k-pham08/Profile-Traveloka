import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/User';
import { Order } from '../entities/Order';
import { OrderDetail } from '../entities/OrderDetail';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, OrderDetail])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
