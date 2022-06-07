import { Module } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { OrderDetailController } from './order-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from '../entities/OrderDetail';
import { Order } from '../entities/Order';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail, Order])],
  controllers: [OrderDetailController],
  providers: [OrderDetailService]
})
export class OrderDetailModule {}
