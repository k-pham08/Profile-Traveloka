import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountDto } from "../account/dto/create-account.dto";
import { Account } from "../entities/Account";
import { Customer } from "../entities/Customer";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";

@Injectable()
export class CustomerService {
     constructor(
          @InjectRepository(Account)
          private readonly accRepository: Repository<Account>,
          @InjectRepository(Customer)
          private readonly cusRepository: Repository<Customer>,
     ) {}

     async create(createCustomerDto: CreateCustomerDto) {
          const newAccount = await this.accRepository.create({ username: createCustomerDto.username, password: createCustomerDto.password, type: createCustomerDto.type });
          console.log(newAccount.accountId);
          await this.accRepository.save(newAccount);
          await this.cusRepository.save({
               accountId: newAccount.accountId,
               name: createCustomerDto.name,
               gender: createCustomerDto.gender,
               birthday: createCustomerDto.birthday,
               address: createCustomerDto.address,
               email: createCustomerDto.email,
               phone: createCustomerDto.phone,
          });
     }

     findAll() {
          return this.cusRepository.find();
     }

     findByAccountId(accountId) {
          return this.findOne(accountId);
     }

     findOne(id) {
          return this.cusRepository.findOne(id);
     }

     update(id: string, updateCustomerDto) {
          return this.cusRepository.update(id, updateCustomerDto);
     }

     remove(id: string) {
          this.cusRepository.delete(id);
          this.accRepository.delete(id);
     }
}
