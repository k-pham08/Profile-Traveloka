import { Injectable, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Order } from "../entities/Order";
import { User } from "../entities/User";
import { RolesGuard } from "../auth/roles.guard";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Roles } from "../decorators/role.decorator";
import { UserRoles } from "../enums/roles";
import { OrderDetail } from "../entities/OrderDetail";

@Injectable()
// @UseGuards(RolesGuard)
// @Roles(UserRoles.PARTNER && UserRoles.ADMIN)
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(OrderDetail)
        private readonly orderDetailRepository: Repository<OrderDetail>
    ) {}

    async create(createOrderDto: CreateOrderDto) {
        try {
            const details: OrderDetail[] = []
            const user = await this.userRepository.findOneBy({ userId: createOrderDto.userId });
            const partner = await this.userRepository.findOneBy({userId: createOrderDto.partnerId});
            user.reward += createOrderDto.reward;
            const order = await this.orderRepository.create({
                  createdAt: createOrderDto.createdAt,
                  total: createOrderDto.total,
                  reward: createOrderDto.reward,
                  voucherCode: createOrderDto.voucherCode,
                  user: user,
                  partner: partner
            });
            for (const detail of createOrderDto.details) {
                const orderDetail = await this.orderDetailRepository.create({
                    productName: detail.productName,
                    quantity: detail.quantity,
                    price: detail.price,
                    thumbnail: detail.thumbnail,
                    link: detail.link,
                })
                details.push(orderDetail)
                await this.orderDetailRepository.save(orderDetail);
            };
            
            order.orderDetails = [...details];
            await this.userRepository.save(user);
            await this.userRepository.save(partner);
            await this.orderRepository.save(order);
        } catch(err) {
            console.log(err)
        }
    }

    findAll() {
        return this.orderRepository.find();
    }

    findOne(id) {
        return this.orderRepository.findOne(id);
    }

    update(id: string, updateOrderDto: UpdateOrderDto) {
        return this.orderRepository.update(id, updateOrderDto);
    }

    remove(id) {
        return this.orderRepository.remove(id);
    }
}
