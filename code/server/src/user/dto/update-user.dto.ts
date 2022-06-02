import {ApiProperty, PartialType} from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto {
     @ApiProperty()
     reward: number;
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
     @ApiProperty()
     services: string[];
     @ApiProperty()
     userId: string;
}
