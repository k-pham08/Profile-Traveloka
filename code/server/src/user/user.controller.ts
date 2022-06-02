import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    Post,
    Put,
    Request,
    UnauthorizedException,
    UseGuards,
} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../decorators/role.decorator";
import {PartnerJob, UserRoles} from "../enums/roles";
import {RolesGuard} from "../auth/roles.guard";
import {User} from "../entities/User";
import {ServiceService} from "../service/service.service";
import {Service} from "../entities/Service";

@ApiTags("Users")
@Controller("users")
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
    constructor(private readonly userService: UserService, private readonly serviceService: ServiceService) {
    }

    @Post()
    @Roles(UserRoles.ADMIN)
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    // @Post()
    // createPartner(@Body() createPartnerDto: CreatePartnerDto) {
    //      return this.userService.createPartner(createPartnerDto);
    // }

    @Get("/me")
    @Roles(UserRoles.ALL)
    async getMe(@Request() req) {
        const {password, ...user}: User = await this.userService.findOne({userId: req.user.userId});
        if (user) {
            return {success: true, data: user};
        }
        throw new NotFoundException({success: false, message: "USER_NOT_FOUND"});
    }

    @Roles(UserRoles.ADMIN)
    @Get()
    async findAll() {
        try {
            const users: User[] = await this.userService.findAll();

            if (users) {
                return {success: true, data: users};
            }
            return {success: false, message: "USERS_NULL"};
        } catch (err) {
            throw new BadRequestException({success: false, message: err.message});
        }
    }

    @Get("types")
    @Roles(UserRoles.ADMIN)
    async getTypesList(@Request() req) {
        const {user} = req;

        let type: string[] = [];

        switch (user.type) {
            case UserRoles.ADMIN:
                type = Object.keys(UserRoles).splice(1);
                break;
            case UserRoles.PARTNER:
                type = Object.keys(PartnerJob);
                break;
            default:
                throw new UnauthorizedException({success: false, message: "NOT_PERMISSION"});
        }
        return {success: true, data: type};
    }

    @Get(":id")
    @Roles(UserRoles.SELF)
    async findOne(@Param("id") id: string) {
        return {success: true, data: await this.userService.findOne({userId: id})};
    }

    // only this user and ADMIN can update it
    @Put(":id")
    @Roles(UserRoles.SELF)
    async update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto, @Request() req) {
        const {userId, username, services, type, reward, ...user}: any = updateUserDto;

        // ADMIN can update user type and reward
        if (req.user.type == UserRoles.ADMIN) {
            user.type = type;
            user.reward = reward;
        }

        if (type == UserRoles.PARTNER) {
            if (services) {
                user.services = [];
                for (const code of services) {
                    const service = await this.serviceService.findSerByCode(code);
                    user.services.push(service)
                }
            }
        }

        await this.userService.update(id, user);
        return {success: true, message: "Change Info success!"}
    }

    @Delete(":id")
    @Roles(UserRoles.ADMIN)
    async remove(@Param("id") id: string) {
        try{
            await this.userService.remove(id);
            return {success: true, message: "Delete User Successful!"}
        } catch(e){
            return {success: false, message: e.message}
        }
    }
}
