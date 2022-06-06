import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Service} from "../entities/Service";
import {CreateServiceDto} from "./dto/create-service.dto";
import {UpdateServiceDto} from "./dto/update-service.dto";
import {ServiceClassify} from "../entities/ServiceClassify";

@Injectable()
export class ServiceService {
    constructor(
        @InjectRepository(Service)
        private readonly serviceRepository: Repository<Service>,
        @InjectRepository(ServiceClassify)
        private readonly classifyRepository: Repository<ServiceClassify>
    ) {
    }

    async create(createServiceDto: CreateServiceDto): Promise<Service> {
        const {serviceClassifies, ...serviceDto} = createServiceDto;

        const service: Service = await this.serviceRepository.save(serviceDto);
        const classifies = [];
        for (const sClassify of serviceClassifies) {
            classifies.push(await this.classifyRepository.save(sClassify));
        }

        service.serviceClassifies = classifies;

        await this.serviceRepository.save(service);

        return service;
    }

    findAll() {
        return this.serviceRepository.find();
    }

    findOne(serviceId, isRelation: boolean = false) {
        return this.serviceRepository.findOne({where: {serviceId}, relations: {serviceClassifies: true}});
    }

    findSerByCode(code) {
        return this.serviceRepository.findOneBy({serviceCode: code});
    }

    update(id: string, updateServiceDto: UpdateServiceDto) {
        return this.serviceRepository.update(id, updateServiceDto);
    }

    async remove(id: string) {
        const service: Service = await this.findOne(id);

        await this.classifyRepository.remove(service.serviceClassifies);
        return this.serviceRepository.delete(id);
    }
}
