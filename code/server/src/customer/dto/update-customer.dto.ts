import { ApiProperty } from "@nestjs/swagger";

export class UpdateCustomerDto {
     @ApiProperty()
     name: string;
     @ApiProperty()
     gender: boolean;
     @ApiProperty()
     birthday: Date;
     @ApiProperty()
     address: string;
     @ApiProperty()
     email: string;
     @ApiProperty()
     phone: number;
}
