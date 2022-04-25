import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
     @ApiProperty()
     name: string;
     @ApiProperty()
     location: string;
     @ApiProperty()
     phone: number;
     @ApiProperty()
     country: string;
     @ApiProperty()
     service: string;
}
