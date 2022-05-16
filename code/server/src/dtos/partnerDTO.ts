import { ApiProperty } from "@nestjs/swagger";
import { UserRoles } from "../enums/roles";

export class partnerDTO {
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
     job: string = "ADMIN";
     @ApiProperty()
     companyName: string;
     @ApiProperty()
     location: string;
     @ApiProperty()
     companyPhone: string;
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

     public isValid() {
          return (
               this.name &&
               this.gender &&
               this.email &&
               this.dob &&
               this.phone &&
               this.address &&
               this.job &&
               this.companyName &&
               this.location &&
               this.companyPhone &&
               this.country &&
               this.serviceCode
          );
     }
}
