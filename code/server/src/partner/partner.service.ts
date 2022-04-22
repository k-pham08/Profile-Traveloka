import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePartnerDto } from "./dto/create-partner.dto";
import { UpdatePartnerDto } from "./dto/update-partner.dto";
import { Partner } from "../entities/Partner";
import { Account } from "../entities/Account";
@Injectable()
export class PartnerService {
     constructor(
          @InjectRepository(Account)
          private readonly accRepository: Repository<Account>,
          @InjectRepository(Partner)
          private readonly partnerRepository: Repository<Partner>,
     ) {}

     async create(createPartnerDto) {
          const newAcc = await this.accRepository.create({
               username: createPartnerDto.username,
               password: createPartnerDto.password,
               type: createPartnerDto.type,
          });
          await this.accRepository.save(newAcc);
          await this.partnerRepository.save({
               name: createPartnerDto.name,
               phone: createPartnerDto.phone,
               email: createPartnerDto.email,
               job: createPartnerDto.job,
               companyName: createPartnerDto.companyName,
               country: createPartnerDto.country,
               officeAddress: createPartnerDto.officeAddress,
               officePhone: createPartnerDto.officePhone,
               accountId: newAcc.accountId,
          });
     }

     findByAccountId(accountId) {
          return this.partnerRepository.findOne(accountId);
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
          this.partnerRepository.delete(id);
          this.accRepository.delete(id);
     }
}
