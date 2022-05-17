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
     type: string = UserRoles.USER;

     constructor(data?: any) {
          const { username, password, name, email, gender, dob, phone, address } = data;
          this.username = username;
          this.password = md5(password);
          this.name = name;
          this.email = email;
          this.gender = gender;
          this.dob = new Date(dob);
          this.phone = phone;
          this.address = address;
     }
}
