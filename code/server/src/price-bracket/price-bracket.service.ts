import { Injectable } from '@nestjs/common';
import { CreatePriceBracketDto } from './dto/create-price-bracket.dto';
import { UpdatePriceBracketDto } from './dto/update-price-bracket.dto';

@Injectable()
export class PriceBracketService {
  create(createPriceBracketDto: CreatePriceBracketDto) {
    return 'This action adds a new priceBracket';
  }

  findAll() {
    return `This action returns all priceBracket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceBracket`;
  }

  update(id: number, updatePriceBracketDto: UpdatePriceBracketDto) {
    return `This action updates a #${id} priceBracket`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceBracket`;
  }
}
