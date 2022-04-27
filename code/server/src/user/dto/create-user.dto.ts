import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
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
     dob: Date;
     @ApiProperty()
     phone: number;
     @ApiProperty()
     address: string;
     @ApiProperty()
     job: string;
     @ApiProperty()
     type: string;
     @ApiProperty()
     companyName: string;
     @ApiProperty()
     location: string;
     @ApiProperty()
     companyPhone: number;
     @ApiProperty()
     country: string;
}
