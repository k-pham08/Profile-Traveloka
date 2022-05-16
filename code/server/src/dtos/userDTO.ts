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
     dob: number;
     @ApiProperty()
     phone: number;
     @ApiProperty()
     address: string;

     constructor(data?: any) {
          const { username, password, name, gender, dob, phone, email, address } = data;
          this.username = username;
          this.password = password;
          this.name = name;
          this.email = email;
          this.gender = gender;
          this.dob = dob;
          this.phone = phone;
          this.address = address;
     }

     public isValid() {
          return this.username && this.password && this.name && this.gender && this.email && this.dob && this.phone && this.address;
     }
}
