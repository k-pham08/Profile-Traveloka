import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Service } from "../entities/Service";

@Injectable()
export class ServiceService {
     constructor(
          @InjectRepository(Service)
          private readonly serRepository: Repository<Service>,
     ) {}

     findAll() {
          return this.serRepository.find();
     }

     findOne(id) {
          return this.serRepository.findOne(id);
     }

     findOneBy(name: string) {
          return this.serRepository.findOneBy({ serviceName: name.toUpperCase() });
     }

     update(id: string, updateServiceDto) {
          return this.serRepository.update(id, updateServiceDto);
     }

     remove(id: string) {
          return this.serRepository.delete(id);
     }
}
