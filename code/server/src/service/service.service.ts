import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Service } from "../entities/Service";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";

@Injectable()
export class ServiceService {
     constructor(
          @InjectRepository(Service)
          private readonly serviceRepository: Repository<Service>,
     ) {}
     create(createServiceDto: CreateServiceDto) {
          return "This action adds a new service";
     }

     findAll() {
          return this.serviceRepository.find();
     }

     findOne(id) {
          return this.serviceRepository.create(id);
     }

     update(id: string, updateServiceDto: UpdateServiceDto) {
          return this.serviceRepository.update(id, updateServiceDto);
     }

     remove(id: string) {
          return this.serviceRepository.delete(id);
     }
}
