import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "../entities/Company";
import { User } from "../entities/User";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { md5 } from "../utils/md5";

@Injectable()
export class UserService {
     constructor(
          @InjectRepository(User)
          private readonly userRepository: Repository<User>,
          @InjectRepository(Company)
          private readonly companyRepository: Repository<Company>,
     ) {}

     // async create(createUserDto: CreateUserDto) {
     //      const user = await this.userRepository.create(createUserDto);
     //      user.reward = 0;
     //      await this.userRepository.save(user);
     // }

     async create(createUserDto): Promise<User> {
          const user = await this.userRepository.save(createUserDto);
          return user;
     }

     findAll() {
          return this.userRepository.find();
     }

     findOne(user): Promise<User> {
          return this.userRepository.findOne({ where: user });
     }

     findByUsername(username: string) {
          return this.userRepository.findOneBy({ username });
     }

     update(id: string, updateUserDto) {
          return this.userRepository.update(id, updateUserDto);
     }

     remove(id: string) {
          return this.userRepository.delete(id);
     }
}
