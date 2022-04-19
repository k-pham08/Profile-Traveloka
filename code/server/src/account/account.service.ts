import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountDto } from "./dto/create-account.dto";
import { UpdateAccountDto } from "./dto/update-account.dto";
import { Account } from "../entities/Account";
@Injectable()
export class AccountService {
     constructor(
          @InjectRepository(Account)
          private readonly accRepository: Repository<Account>,
     ) {}
     create(createAccountDto: CreateAccountDto) {
          return this.accRepository.save(createAccountDto);
     }

     findAll(): Promise<Account[]> {
          return this.accRepository.find();
     }

     findByUsername(username): Promise<Account> {
          return this.accRepository.findOne(username);
     }

     findOne(id): Promise<Account> {
          return this.accRepository.findOne(id);
     }

     update(id: string, updateAccountDto: UpdateAccountDto) {
          return this.accRepository.update(id, updateAccountDto);
     }

     remove(id: string) {
          return this.accRepository.delete(id);
     }
}
