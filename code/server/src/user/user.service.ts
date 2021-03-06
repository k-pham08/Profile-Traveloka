import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "../entities/User";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {makeSelected} from "../utils/selected";
import {DateUtils} from "typeorm/util/DateUtils";
import { RewardDto } from "../user/dto/reward.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
    }

    // async create(createUserDto: CreateUserDto) {
    //      const user = await this.userRepository.create(createUserDto);
    //      user.reward = 0;
    //      await this.userRepository.save(user);
    // }

    create(createUserDto: CreateUserDto): Promise<User> {
        try{
            return this.userRepository.save(createUserDto);
        }catch(e) {
            console.log(e)
        }
        return null;
    }

    setReward(id: string, rewardDto: RewardDto){
        return this.userRepository.update(id, {reward: rewardDto.reward})
    }

    findAll() {
        return this.userRepository.find({select: makeSelected("user"), relations: ["services"]});
    }

    findOne(user): Promise<User> {
        return this.userRepository.findOne({where: user, relations: {services: true}, select: makeSelected("user")});
    }

    findUserAuth(user): Promise<User> {
        return this.userRepository.findOne({where: user, relations: {services: true}});
    }

    findOneWithPassword(user): Promise<User>{
        return this.userRepository.findOne({where: user});
    }

    update(id: string, userDto: any) {
        userDto.userId = id;
        return this.userRepository.save(userDto);
    }

    remove(id: string) {
        return this.userRepository.delete(id);
    }
}
