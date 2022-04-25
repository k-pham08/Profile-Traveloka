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
     address: string;
     @ApiProperty()
     job: string;
     @ApiProperty()
     type: string;
     @ApiProperty()
     companyId: string;
}
