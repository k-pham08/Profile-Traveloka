import {
    Controller,
    Post,
    Headers, Body, InternalServerErrorException, BadRequestException
} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {RewardDto} from "../user/dto/reward.dto";
import {User} from "../entities/User";
import {UserRoles} from "../enums/roles";

@Controller('vouchers')
export class VoucherController {
    constructor(private userService: UserService) {
    }

    @Post("/reward")
    async setRewardUser(@Headers("service") service, @Body() rewardDto: RewardDto) {
        if(service != "VOUCHER")
            throw new BadRequestException({success: false, message: "NOT_PERMISSION"});

        if(!rewardDto.userId)
            throw new BadRequestException({success: false, message: "userId is required"});
        if(!rewardDto.reward)
            throw new BadRequestException({success: false, message: "reward is required"});
        try {
            const user:User = await this.userService.findOne({userId: rewardDto.userId});

            if(!user)
                throw new BadRequestException({success: false, message: "USER_NOT_EXIST"});

            if(user.type != UserRoles.USER)
                throw new BadRequestException({success: false, message: "NOT_USER"});

            user.reward = rewardDto.reward;

            const {userId, ...data} = user;

            await this.userService.update(userId, data)

            return {success: true, data: user, message: "CHANGE SUCCESSFUL"};
        }catch (e) {
            throw new InternalServerErrorException({success: false, message: e.message});
        }
    }
}
