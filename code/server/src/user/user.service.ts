import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { use } from "passport";
import { Repository } from "typeorm";
import { User } from "../entities/User";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
     constructor(
          @InjectRepository(User)
          private readonly userRepository: Repository<User>,
     ) {}
     async create(createUserDto: CreateUserDto) {
          const user = await this.userRepository.create(createUserDto);
          await this.userRepository.save(user);
     }

     findAll() {
          return `This action returns all user`;
     }

     findOne(id) {
          return this.userRepository.findOne(id);
     }

     findByUserName(username: string) {
          return this.userRepository.findOneBy({ username });
     }

     update(id: number, updateUserDto: UpdateUserDto) {
          return `This action updates a #${id} user`;
     }

     remove(id: number) {
          return `This action removes a #${id} user`;
     }
}
