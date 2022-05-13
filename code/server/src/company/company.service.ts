import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { use } from "passport";
import { Repository } from "typeorm";
import { Company } from "../entities/Company";
import { Service } from "../entities/Service";
import { User } from "../entities/User";
import { UserRoles } from "../enums/roles";
import { md5 } from "../utils/md5";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";

@Injectable()
export class CompanyService {
     constructor(
          @InjectRepository(Company)
          private readonly companyRepository: Repository<Company>,
          @InjectRepository(Service)
          private readonly serviceRepository: Repository<Service>,
          @InjectRepository(User)
          private readonly userRepository: Repository<User>,
     ) {}
     async create(createCompanyDto) {
          const company = await this.companyRepository.create({
               name: createCompanyDto.name,
               location: createCompanyDto.location,
               phone: createCompanyDto.phone,
               country: createCompanyDto.country,
          });
          const service = await this.serviceRepository.findOneBy({ serviceCode: createCompanyDto.serviceCode });
          const user = await this.userRepository.create({
               username: "admin",
               password: md5("admin"),
               name: "admin",
               email: "admin@gmail.com",
               gender: true,
               dob: new Date(),
               phone: "0123456",
               address: "admin",
               job: "admin",
               type: UserRoles.PARTNER,
               reward: 0,
          });
          company.service = service;
          user.company = company;
          await this.companyRepository.save(company);
          await this.userRepository.save(user);
     }

     findAll() {
          return `This action returns all company`;
     }

     findOne(id: number) {
          return `This action returns a #${id} company`;
     }

     update(id: number, updateCompanyDto: UpdateCompanyDto) {
          return `This action updates a #${id} company`;
     }

     remove(id: number) {
          return `This action removes a #${id} company`;
     }
}
