import {
    BadRequestException,
    Body,
    Controller,
    Delete, ForbiddenException,
    Get,
    InternalServerErrorException,
    NotFoundException,
    Param,
    Post,
    Put,
    Request,
    UseGuards,
} from "@nestjs/common";
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Roles} from "../decorators/role.decorator";
import {UserRoles} from "../enums/roles";
import {RolesGuard} from "../auth/roles.guard";
import {User} from "../entities/User";
import {ServiceService} from "../service/service.service";
import {md5} from "../utils/md5";
import {AuthService} from "../auth/auth.service";
import {RewardDto} from '../user/dto/reward.dto';

@ApiTags("Users")
@Controller("users")
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
    constructor(private readonly userService: UserService, private readonly serviceService: ServiceService, private readonly authService: AuthService) {
    }

    @Post()
    @Roles(UserRoles.ADMIN)
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

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
            const data = [];

            for (const user of users)
                data.push({...user, ...(await this.authService.login(user))});

            if (data) {
                return {success: true, data};
            }
            return {success: false, message: "USERS_NULL"};
        } catch (err) {
            throw new BadRequestException({success: false, message: err.message});
        }
    }

    @Get("types")
    async getTypesList(@Request() req) {
        const {user} = req;
        let type: string[] = user.type == UserRoles.ADMIN ? Object.keys(UserRoles).splice(2) : [];

        return {success: true, data: type};
    }

    @Get(":id")
    @Roles(UserRoles.SELF)
    async findOne(@Param("id") id: string) {
        return {success: true, data: await this.userService.findOne({userId: id})};
    }

    @Post(":id/change-password")
    @Roles(UserRoles.SELF)
    async changePassword(@Param("id") id: string, @Request() req) {
        const {type} = req.user;
        const {new_password, old_password} = req.body;

        const user: User = await this.userService.findOneWithPassword({userId: id});

        if (type != UserRoles.ADMIN) {
            if (user.password != md5(old_password)) {
                throw new ForbiddenException({success: false, message: "OLD_PASSWORD_INCORRECT"})
            }
        }
        await this.userService.update(id, {password: md5(new_password)});
        return {success: true, message: "CHANGE_PASSWORD_SUCCESSFUL"};
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
            user.username = username;
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
        try {
            await this.userService.remove(id);
            return {success: true, message: "Delete User Successful!"}
        } catch (e) {
            return {success: false, message: e.message}
        }
    }
}
