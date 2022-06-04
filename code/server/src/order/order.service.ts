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

@Injectable()
// @UseGuards(RolesGuard)
// @Roles(UserRoles.PARTNER && UserRoles.ADMIN)
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(createOrderDto: CreateOrderDto) {
        const user = await this.userRepository.findOneBy({ userId: createOrderDto.userId });
        const order = await this.orderRepository.create({
              orderId: createOrderDto.orderId,
              createdAt: createOrderDto.createdAt,
              total: createOrderDto.total,
              reward: createOrderDto.reward,
              serviceId: createOrderDto.serviceId,
        });
        user.reward += createOrderDto.reward;
        order.user = user;
        await this.userRepository.save(user);
        await this.orderRepository.save(order);
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
