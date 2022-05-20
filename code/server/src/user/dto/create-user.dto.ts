import { ApiProperty } from "@nestjs/swagger";
import { md5 } from "../../utils/md5";
import { Service } from "../../entities/Service";

export class CreateUserDto {
     @ApiProperty()
     username: string;
     @ApiProperty()
     password: string;
     @ApiProperty()
     name: string;
     @ApiProperty()
     email: string;
     @ApiProperty()
     gender: boolean;
     @ApiProperty()
     dob: Date;
     @ApiProperty()
     phone: string;
     @ApiProperty()
     address: string;
     @ApiProperty()
     companyName: string;
     services: Service[];
     type: string;
     reward: number;

     constructor(data?: any) {
          this.username = "";
          this.password = "";
          this.name = "";
          this.email = "";
          this.gender = false;
          this.dob = new Date();
          this.phone = "";
          this.address = "";
          this.reward = 0;
          this.companyName = "";
          this.services = [];
          if (!data) {
               return;
          }
          const { username, password, name, email, gender, dob, phone, address, companyName, services } = data;
          this.username = username;
          this.password = md5(password);
          this.name = name;
          this.email = email;
          this.gender = gender;
          this.dob = new Date(dob);
          this.phone = phone;
          this.address = address;
          this.companyName = companyName;
          this.services = services;
     }
}
