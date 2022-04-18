import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePartnerDto } from "./dto/create-partner.dto";
import { UpdatePartnerDto } from "./dto/update-partner.dto";
import { Partner } from "./entities/Partner";

@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository: Repository<Partner>,
  ) {}

  create(createPartnerDto: CreatePartnerDto) {
    return this.partnerRepository.create(createPartnerDto);
  }

  findAll() {
    return this.partnerRepository.find();
  }

  findOne(id: string) {
    return this.partnerRepository.findOne({ where: { id } });
  }

  update(id: string, updatePartnerDto: UpdatePartnerDto) {
    return this.partnerRepository.update(id, updatePartnerDto);
  }

  remove(id: string) {
    return this.partnerRepository.delete(id);
  }
}
