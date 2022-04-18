import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./entities/Customer";

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly cusRepository: Repository<Customer>,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.cusRepository.create(createCustomerDto);
  }

  findAll() {
    return this.cusRepository.find();
  }

  findOne(id: string) {
    return this.cusRepository.findOne({ where: { id } });
  }

  update(id: string, updateCustomerDto) {
    return this.cusRepository.update(id, updateCustomerDto);
  }

  remove(id: string) {
    return this.cusRepository.delete(id);
  }
}
