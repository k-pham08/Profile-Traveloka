import { Injectable } from '@nestjs/common';
import { CreateServiceClassifyDto } from './dto/create-service-classify.dto';
import { UpdateServiceClassifyDto } from './dto/update-service-classify.dto';

@Injectable()
export class ServiceClassifyService {
  create(createServiceClassifyDto: CreateServiceClassifyDto) {
    return 'This action adds a new serviceClassify';
  }

  findAll() {
    return `This action returns all serviceClassify`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serviceClassify`;
  }

  update(id: number, updateServiceClassifyDto: UpdateServiceClassifyDto) {
    return `This action updates a #${id} serviceClassify`;
  }

  remove(id: number) {
    return `This action removes a #${id} serviceClassify`;
  }
}
