import {ApiProperty, PartialType} from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
     @ApiProperty()
     username: string;
     @ApiProperty()
     address: string;
     @ApiProperty()
     bod: Date;
     @ApiProperty()
     email: string;
     @ApiProperty()
     gender: boolean;
     @ApiProperty()
     name: string;
     @ApiProperty()
     phone: string;
     @ApiProperty()
     type: string;
}
