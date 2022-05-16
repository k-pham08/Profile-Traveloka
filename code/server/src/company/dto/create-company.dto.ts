import { ApiProperty } from "@nestjs/swagger";
import { UserRoles } from "../../enums/roles";

export class CreateCompanyDto {
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
     type: string = UserRoles.PARTNER;
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
}
