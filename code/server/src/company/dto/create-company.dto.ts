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

     constructor(data?: any) {
          const { name, gender, dob, phone, email, address, job, companyName, location, companyPhone, country, serviceCode } = data;
          this.name = name;
          this.email = email;
          this.gender = gender;
          this.dob = dob;
          this.phone = phone;
          this.address = address;
          this.job = job;
          this.companyName = companyName;
          this.location = location;
          this.companyPhone = companyPhone;
          this.country = country;
          this.serviceCode = serviceCode;
     }
}
