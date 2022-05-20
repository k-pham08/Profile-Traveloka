import { ApiProperty } from "@nestjs/swagger";

export class userDTO {
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
     services: string[];
     type: string;
     reward: number;

     constructor(data?: any) {
          const { username, password, name, email, gender, dob, phone, address, companyName, services } = data;
          this.username = username;
          this.password = password;
          this.name = name;
          this.email = email;
          this.gender = gender;
          this.dob = new Date(dob);
          this.phone = phone;
          this.address = address;
          this.reward = 0;
          this.companyName = companyName;
          this.services = services;
     }

     public isValid() {
          return this.username && this.password && this.name && this.gender != undefined && this.email && this.dob && this.phone && this.address;
     }
}
