import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "../entities/Company";
import { Reward } from "../entities/Reward";
import { User } from "../entities/User";
import { UserType } from "../entities/UserType";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
     constructor(
          @InjectRepository(User)
          private readonly userRepository: Repository<User>,
          @InjectRepository(UserType)
          private readonly userTypeRepository: Repository<UserType>,
          @InjectRepository(Reward)
          private readonly rewardRepository: Repository<Reward>,
          @InjectRepository(Company)
          private readonly companyRepository: Repository<Company>,
     ) {}
     async create(createUserDto: CreateUserDto) {
          const user = await this.userRepository.create(createUserDto);
          const type = await this.userTypeRepository.findOne({ where: { name: createUserDto.type.toUpperCase() } });
          const reward = await this.rewardRepository.save({
               userId: user.userId,
               reward: 0,
               value: 0,
          });
          if (createUserDto.companyId != "") {
               const company = await this.companyRepository.findOneBy({ companyId: createUserDto.companyId });
               user.companyCompany = company;
          }
          user.typeType = type;
          user.rewardUser = reward;
          await this.userRepository.save(user);
     }

     findAll() {
          return this.userRepository.find();
     }

     findOne(id) {
          return this.userRepository.findOne(id);
     }

     findByUsername(user: string) {
          return this.userRepository.findOneBy({ username: user });
     }

     update(id: string, updateUserDto: UpdateUserDto) {
          return this.userRepository.update(id, updateUserDto);
     }

     async remove(id: string) {
          await this.userRepository.delete(id);
          await this.rewardRepository.delete(id);
     }
}
