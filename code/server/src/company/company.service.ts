import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Company } from "../entities/Company";
import { Service } from "../entities/Service";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";

@Injectable()
export class CompanyService {
     constructor(
          @InjectRepository(Company)
          private readonly companyRepository: Repository<Company>,
          @InjectRepository(Service)
          private readonly serviceRepository: Repository<Service>,
     ) {}
     async create(createCompanyDto: CreateCompanyDto) {
          const company = await this.companyRepository.create(createCompanyDto);
          const service = await this.serviceRepository.findOneBy({ serviceName: createCompanyDto.service.toUpperCase() });
          company.serviceCompany = service;
          await this.companyRepository.save(company);
     }

     findAll() {
          return this.companyRepository.find();
     }

     findOne(id) {
          return this.companyRepository.findOne(id);
     }

     update(id: string, updateCompanyDto: UpdateCompanyDto) {
          return this.companyRepository.update(id, updateCompanyDto);
     }

     remove(id: string) {
          return this.companyRepository.delete(id);
     }
}
