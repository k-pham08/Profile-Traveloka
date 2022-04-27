import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PriceBracket } from "../entities/PriceBracket";
import { ServiceClassify } from "../entities/ServiceClassify";
import { CreatePriceBracketDto } from "./dto/create-price-bracket.dto";
import { UpdatePriceBracketDto } from "./dto/update-price-bracket.dto";

@Injectable()
export class PriceBracketService {
     constructor(
          @InjectRepository(PriceBracket)
          private readonly priceRepository: Repository<PriceBracket>,
          @InjectRepository(ServiceClassify)
          private readonly classifyRepository: Repository<ServiceClassify>,
     ) {}
     async create(createPriceBracketDto: CreatePriceBracketDto) {
          const classify = await this.classifyRepository.findOneBy({ classifyCode: createPriceBracketDto.classifyCode.toUpperCase() });
          const price = await this.priceRepository.create({
               maxPrice: createPriceBracketDto.maxPrice,
               minPrice: createPriceBracketDto.minPrice,
          });
          price.serClassify = classify;
          await this.priceRepository.save(price);
     }

     findAll() {
          return this.priceRepository.find();
     }

     findOne(id) {
          return this.priceRepository.findOne(id);
     }

     update(id: string, updatePriceBracketDto: UpdatePriceBracketDto) {
          return this.priceRepository.update(id, updatePriceBracketDto);
     }

     remove(id: string) {
          return this.priceRepository.delete(id);
     }
}
