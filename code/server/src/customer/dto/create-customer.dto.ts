import { ApiProperty } from "@nestjs/swagger";
import { Account } from "../../entities/Account";

export class CreateCustomerDto {
     @ApiProperty()
     username: string;
     @ApiProperty()
     password: string;
     @ApiProperty()
     type: string;
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
