import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    InternalServerErrorException,
    Param,
    Post,
    Put,
    Request,
    UseGuards
} from '@nestjs/common';
import {OrderService} from './order.service';
import {CreateOrderDto} from './dto/create-order.dto';
import {UpdateOrderDto} from './dto/update-order.dto';
import {ApiTags} from '@nestjs/swagger';
import {JwtAuthGuard} from '../auth/jwt-auth.guard';
import {RolesGuard} from '../auth/roles.guard';
import {Roles} from '../decorators/role.decorator';
import {UserRoles} from '../enums/roles';
import {ServiceService} from "../service/service.service";
import {UserService} from "../user/user.service";
import {User} from "../entities/User";

@ApiTags("Order")
@Controller("orders")
export class OrderController {
    constructor(private readonly orderService: OrderService, private readonly serviceService: ServiceService, private readonly userService: UserService) {
    }

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto, @Request() req) {
        const schema = {
            reward: "number (required)",
            details: [{
                productName: "string (required)",
                quantity: "number (required)",
                price: "number (required)",
                thumbnail: "string (required)",
                link: "string (required)"
            }],
            voucherCode: "string | null",
            partnerId: "string (required)",
            userId: "string (required)"
        }
        const {service_code} = req.headers;

        createOrderDto = createOrderDto as CreateOrderDto;

        const services = await this.serviceService.findAll();

        const service = services.find((e) => e.serviceCode == service_code)

        if (!service_code || !service) {
            throw new BadRequestException({
                success: false,
                message: `Need "service_code" in request headers`,
                enum: services.map((e) => e.serviceCode)
            })
        }

        try {
            let orderIsValid = CreateOrderDto.orderIsValidChecker(createOrderDto);

            let userIsValid = await this.orderService.userIsValid(createOrderDto.userId, "USER");

            let partnerIsValid = await this.orderService.userIsValid(createOrderDto.partnerId, "PARTNER");

            if (!userIsValid) {
                throw new Error("Wrong user type or user do not existed");
            }

            if (!partnerIsValid) {
                throw new Error("Wrong partner or partner do not existed");
            }

        } catch (e) {
            throw new BadRequestException({success: false, message: e.message, data: createOrderDto, schema});
        }
        try {
            const data = await this.orderService.create(createOrderDto, service);
            const order = await this.orderService.findOne(data.orderId);

            return {success: true, data: order};
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
        } catch (e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
    }

    @Get("users/:userId")
    @Roles(UserRoles.ADMIN)
    async findByAccount(@Param('userId') userId: string) {
        try {
            const user: User= await this.userService.findOne({userId})

            if(!user)
                return new BadRequestException({success: false, message: "USER_NOT_EXIST"})

            const data = await this.orderService.findOfAccount(userId, user.type);
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
