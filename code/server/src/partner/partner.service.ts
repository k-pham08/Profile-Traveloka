import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePartnerDto } from "./dto/create-partner.dto";
import { UpdatePartnerDto } from "./dto/update-partner.dto";
import { Partner } from "../entities/Partner";
@Injectable()
export class PartnerService {
  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepository: Repository<Partner>,
  ) {}

  create(createPartnerDto) {
    return this.partnerRepository.save(createPartnerDto);
  }

  findAll() {
    return this.partnerRepository.find();
  }

  findOne(id) {
    return this.partnerRepository.findOne(id);
  }

  update(id: string, updatePartnerDto) {
    return this.partnerRepository.update(id, updatePartnerDto);
  }

  remove(id: string) {
    return this.partnerRepository.delete(id);
  }
}
