import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { RewardService } from "./reward.service";
import { UpdateRewardDto } from "./dto/update-reward.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Reward")
@Controller("reward")
export class RewardController {
     constructor(private readonly rewardService: RewardService) {}

     @Get()
     findAll() {
          return this.rewardService.findAll();
     }

     @Get(":id")
     findOne(@Param("id") id: string) {
          return this.rewardService.findOne(id);
     }

     @Patch(":id")
     update(@Param("id") id: string, @Body() updateRewardDto: UpdateRewardDto) {
          return this.rewardService.update(id, updateRewardDto);
     }
}
