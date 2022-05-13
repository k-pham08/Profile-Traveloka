import {
    Controller,
    Request,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    UseInterceptors,
    NotFoundException
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

@ApiTags("Users")
@Controller("users")
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    // @Post()
    // createPartner(@Body() createPartnerDto: CreatePartnerDto) {
    //      return this.userService.createPartner(createPartnerDto);
    // }

    @Get("/me")
    @Roles(UserRoles.USER)
    async getMe(@Request() req) {
        const user: User = await this.userService.findOne({userId: req.user.userId})
        if (user) {
            return {success: true, data: user}
        }
        throw new NotFoundException({success: false, message: "USER_NOT_FOUND"});
    }

    @Roles(UserRoles.ADMIN)
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.userService.findOne(id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.userService.remove(id);
    }
}
