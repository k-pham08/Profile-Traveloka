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
          private readonly serClassifyRepository: Repository<ServiceClassify>,
          @InjectRepository(Service)
          private readonly serRepository: Repository<Service>,
     ) {}
     async create(createServiceClassifyDto: CreateServiceClassifyDto) {
          const classify = await this.serClassifyRepository.create(createServiceClassifyDto);
          const service = await this.serRepository.findOneBy({ serviceName: createServiceClassifyDto.serviceName.toUpperCase() });
          classify.service = service;
          await this.serClassifyRepository.save(classify);
     }

     findAll() {
          return this.serClassifyRepository.find();
     }

     findOne(id) {
          return this.serClassifyRepository.findOne(id);
     }

     update(id: string, updateServiceClassifyDto: UpdateServiceClassifyDto) {
          return this.serClassifyRepository.update(id, updateServiceClassifyDto);
     }

     remove(id: string) {
          return this.serClassifyRepository.delete(id);
     }
}
