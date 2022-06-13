import {Injectable, UseGuards} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Order} from "../entities/Order";
import {User} from "../entities/User";
import {RolesGuard} from "../auth/roles.guard";
import {CreateOrderDto} from "./dto/create-order.dto";
import {UpdateOrderDto} from "./dto/update-order.dto";
import {Roles} from "../decorators/role.decorator";
import {UserRoles} from "../enums/roles";
import {OrderDetail} from "../entities/OrderDetail";
import {Service} from "../entities/Service";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(OrderDetail)
        private readonly orderDetailRepository: Repository<OrderDetail>
    ) {
    }

    async create(createOrderDto: CreateOrderDto, service: Service) {
        const details: OrderDetail[] = [];
        createOrderDto.createdAt = new Date();
        const user = await this.userRepository.findOneBy({userId: createOrderDto.userId});
        const partner = await this.userRepository.findOneBy({userId: createOrderDto.partnerId});
        user.reward += createOrderDto.reward;
        const order = await this.orderRepository.create({
            createdAt: createOrderDto.createdAt,
            total: 0,
            reward: createOrderDto.reward,
            voucherCode: createOrderDto.voucherCode,
            user,
            partner,
            service,
        });
        for (const detail of createOrderDto.details) {
            detail.order = order;
            const orderDetail = await this.orderDetailRepository.create(detail);

            order.total += orderDetail.price * orderDetail.quantity;
            details.push(orderDetail);
        }

        order.orderDetails = details;
        await this.orderRepository.save(order);
        return order;
    }

    findAll() {
        return this.orderRepository.find();
    }

    async findOfAccount(id: string, type) {
        return this.orderRepository.find({
            where: type == "USER" ? {user: {userId: id}} : {partner: {userId: id}},
            relations: {
                orderDetails: true, partner: true, user: true
            }
        })
    }

    async findByAccount(id: string) {
        const user = await this.userRepository.findOne({where: {userId: id}});
        if (user) {
            if (user.type == UserRoles.USER)
                return this.orderRepository.find({
                    where: {user: {userId: id}},
                    relations: {orderDetails: true, partner: true, user: true}
                })
            else if (user.type == UserRoles.PARTNER)
                return this.orderRepository.find({
                    where: {partner: {userId: id}},
                    relations: {orderDetails: true, partner: true, user: true}
                })
        } else {
            return this.orderRepository.findOne({
                where: {orderId: id},
                relations: {orderDetails: true, partner: true, user: true}
            })
        }

    }

    findOne(id) {
        return this.orderRepository.findOne({
            where: {orderId: id},
            relations: {orderDetails: true, partner: true, user: true}
        })
    }

    update(id: string, updateOrderDto: UpdateOrderDto) {
        return this.orderRepository.update(id, updateOrderDto);
    }

    async remove(id) {
        const order = await this.orderRepository.findOneBy({orderId: id});
        const details = await this.orderDetailRepository.find({where: {order: order}});
        for (const detail of details) {
            await this.orderDetailRepository.delete(detail.detailId);
        }
        await this.orderRepository.delete(order)
    }

    async userIsValid(userId: string, type: string) {
        if (userId) {
            const user = await this.userRepository.findOne({where: {userId}});
            if (user && user.type === type)
                return true;
        }

        return false;
    }
}
