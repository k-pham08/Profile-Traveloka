import { ApiProperty } from "@nestjs/swagger";
import { md5 } from "../../utils/md5";
import { UserRoles } from "../../enums/roles";

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
     type: string;
     reward: number;

     constructor(data?: any) {
          const { username, password, name, email, gender, dob, phone, address, companyName } = data;
          this.username = username;
          this.password = md5(password);
          this.name = name;
          this.email = email;
          this.gender = gender;
          this.dob = new Date(dob);
          this.phone = phone;
          this.address = address;
          this.reward = 0;
          this.companyName = companyName;
     }
}
