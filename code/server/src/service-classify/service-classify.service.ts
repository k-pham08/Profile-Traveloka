import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Service } from "../entities/Service";
import { ServiceClassify } from "../entities/ServiceClassify";
import { CreateServiceClassifyDto } from "./dto/create-service-classify.dto";
import { UpdateServiceClassifyDto } from "./dto/update-service-classify.dto";

@Injectable()
export class ServiceClassifyService {
     constructor(
          @InjectRepository(ServiceClassify)
          private readonly classifyRepository: Repository<ServiceClassify>,
          @InjectRepository(Service)
          private readonly serviceRepository: Repository<Service>,
     ) {}
     async create(createServiceClassifyDto: CreateServiceClassifyDto) {
          const service = await this.serviceRepository.findOneBy({ serviceCode: createServiceClassifyDto.serviceCode.toUpperCase() });
          const classify = await this.classifyRepository.create({
               classifyCode: createServiceClassifyDto.classifyCode,
          });
          classify.service = service;
          await this.classifyRepository.save(classify);
     }

     findAll() {
          return this.classifyRepository.find();
     }

     findOne(id) {
          return this.classifyRepository.findOne(id);
     }

     update(id: string, updateServiceClassifyDto) {
          return this.classifyRepository.update(id, updateServiceClassifyDto);
     }

     remove(id: string) {
          return this.classifyRepository.delete(id);
     }
}
