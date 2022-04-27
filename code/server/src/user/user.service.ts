import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "../entities/Company";
import { User } from "../entities/User";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

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

     async create(createUserDto: CreateUserDto) {
          if (createUserDto.companyName == "") {
               const user = await this.userRepository.create({
                    username: createUserDto.username,
                    password: createUserDto.password,
                    name: createUserDto.name,
                    email: createUserDto.email,
                    gender: createUserDto.gender,
                    dob: createUserDto.dob,
                    phone: createUserDto.phone,
                    address: createUserDto.address,
                    job: createUserDto.job,
                    type: createUserDto.type,
                    reward: 0,
               });
               await this.userRepository.save(user);
          } else {
               const company = await this.companyRepository.create({
                    name: createUserDto.companyName,
                    phone: createUserDto.companyPhone,
                    location: createUserDto.location,
                    country: createUserDto.country,
               });
               const partner = await this.userRepository.create({
                    username: createUserDto.username,
                    password: createUserDto.password,
                    name: createUserDto.name,
                    email: createUserDto.email,
                    gender: createUserDto.gender,
                    dob: createUserDto.dob,
                    phone: createUserDto.phone,
                    address: createUserDto.address,
                    job: createUserDto.job,
                    type: createUserDto.type,
                    reward: 0,
               });
               partner.company = company;
               await this.companyRepository.save(company);
               await this.userRepository.save(partner);
          }
     }

     findAll() {
          return this.userRepository.find();
     }

     findOne(id) {
          return this.userRepository.findOne(id);
     }

     findByUsername(username: string) {
          return this.userRepository.findOneBy({ username });
     }

     update(id: string, updateUserDto: UpdateUserDto) {
          return this.userRepository.update(id, updateUserDto);
     }

     remove(id: string) {
          return this.userRepository.delete(id);
     }
}
