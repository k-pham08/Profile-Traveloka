import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Service} from "../entities/Service";
import {CreateServiceDto} from "./dto/create-service.dto";
import {UpdateServiceDto} from "./dto/update-service.dto";

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(Service)
        private readonly serviceRepository: Repository<Service>,
    ) {
    }

    create(createServiceDto: CreateServiceDto) {
        return this.serviceRepository.create(createServiceDto);
    }

     findOne(serviceId) {
          return this.serviceRepository.findOne({where: {serviceId}});
     }

    findOne(serviceId) {
        return this.serviceRepository.findOne({where: {serviceId}});
    }

    findSerByCode(code) {
        return this.serviceRepository.findOneBy({serviceCode: code});
    }

    update(id: string, updateServiceDto: UpdateServiceDto) {
        return this.serviceRepository.update(id, updateServiceDto);
    }

    remove(id: string) {
        return this.serviceRepository.delete(id);
    }
}
