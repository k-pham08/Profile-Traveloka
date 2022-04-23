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
          private readonly serClassifyRepository: Repository<ServiceClassify>,
     ) {}
     async create(createPriceBracketDto: CreatePriceBracketDto) {
          const serClassify = await this.serClassifyRepository.findOneBy({ id: createPriceBracketDto.serClassifyId });
          await this.priceRepository.save({
               bracketId: createPriceBracketDto.serClassifyId,
               name: serClassify.name,
               maxPrice: createPriceBracketDto.maxPrice,
               minPrice: createPriceBracketDto.minPrice,
          });
     }

     findAll() {
          return this.priceRepository.find();
     }

     findOne(id) {
          return this.priceRepository.findOne(id);
     }

     update(id: string, updatePriceBracketDto) {
          return this.priceRepository.update(id, updatePriceBracketDto);
     }

     remove(id: string) {
          return this.priceRepository.delete(id);
     }
}
