import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
     @ApiProperty()
     name: string;
     @ApiProperty()
     location: string;
     @ApiProperty()
     phone: string;
     @ApiProperty()
     country: string;
     @ApiProperty()
     serviceCode: string;
     @ApiProperty()
     email: string;
     @ApiProperty()
     address: string;

     constructor(data?: any) {
          const { name, email, phone, location, country, serviceCode } = data;
          this.name = name;
          this.phone = phone;
          this.location = location;
          this.country = country;
          this.serviceCode = serviceCode;
          this.email = email;
     }
}
