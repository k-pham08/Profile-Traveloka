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
     job: string;
     @ApiProperty()
     type: string = UserRoles.USER;
     @ApiProperty()
     companyId: String;
     @ApiProperty()
     location: string;
     @ApiProperty()
     country: string;

     constructor(data?: any) {
          const { username, password, name, email, gender, dob, phone, address, country, companyId } = data;
          this.username = username;
          this.password = md5(password);
          this.name = name;
          this.email = email;
          this.gender = gender;
          this.dob = new Date(dob);
          this.phone = phone;
          this.address = address;
          this.country = country;
          this.companyId = companyId;
     }
}
