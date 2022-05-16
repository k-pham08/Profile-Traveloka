import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { use } from "passport";
import { Repository } from "typeorm";
import { Company } from "../entities/Company";
import { Service } from "../entities/Service";
import { User } from "../entities/User";
import { PartnerJob } from "../enums/roles";
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
          const service = await this.serviceRepository.findOneBy({ serviceCode: createCompanyDto.serviceCode });
          const company = await this.companyRepository.create({
               name: createCompanyDto.name,
               location: createCompanyDto.location,
               phone: createCompanyDto.phone,
               country: createCompanyDto.country,
          });
          const user = await this.userRepository.create({
               username: `admin-${service.serviceCode.toLowerCase()}`,
               password: md5("admin"),
               name: createCompanyDto.name,
               email: createCompanyDto.email,
               gender: createCompanyDto.gender,
               dob: createCompanyDto.dob,
               phone: createCompanyDto.phone,
               type: PartnerJob.ADMIN,
               address: createCompanyDto.address,
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
