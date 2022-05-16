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
}
