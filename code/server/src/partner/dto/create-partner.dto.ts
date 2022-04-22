import { ApiProperty } from "@nestjs/swagger";

export class CreatePartnerDto {
     @ApiProperty()
     username: string;
     @ApiProperty()
     password: string;
     @ApiProperty()
     type: string;
     @ApiProperty()
     name: string;
     @ApiProperty()
     phone: number;
     @ApiProperty()
     email: string;
     @ApiProperty()
     job: string;
     @ApiProperty()
     companyName: string;
     @ApiProperty()
     country: string;
     @ApiProperty()
     officeAddress: string;
     @ApiProperty()
     officePhone: number;
     account_id: string;
}
