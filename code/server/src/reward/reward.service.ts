import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Reward } from "../entities/Reward";
import { UpdateRewardDto } from "./dto/update-reward.dto";

@Injectable()
export class RewardService {
     constructor(
          @InjectRepository(Reward)
          private readonly rewardReposiory: Repository<Reward>,
     ) {}
     findAll() {
          return this.rewardReposiory.find();
     }

     findOne(id) {
          return this.rewardReposiory.findOne(id);
     }

     update(id: string, updateRewardDto: UpdateRewardDto) {
          return this.rewardReposiory.update(id, updateRewardDto);
     }
}
