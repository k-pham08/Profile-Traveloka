import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserType } from "../entities/UserType";
import { CreateUserTypeDto } from "./dto/create-user-type.dto";
import { UpdateUserTypeDto } from "./dto/update-user-type.dto";

@Injectable()
export class UserTypeService {
     constructor(
          @InjectRepository(UserType)
          private readonly userTypeReposiroty: Repository<UserType>,
     ) {}

     findAll() {
          return this.userTypeReposiroty.find();
     }

     findOne(name: string) {
          return this.userTypeReposiroty.findOne({ where: { name: name } });
     }

     update(id: string, updateUserTypeDto: UpdateUserTypeDto) {
          return this.userTypeReposiroty.update(id, updateUserTypeDto);
     }

     remove(id: string) {
          return this.userTypeReposiroty.delete(id);
     }
}
