import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateAccountDto } from "./create-account.dto";

export class UpdateAccountDto {
     @ApiProperty()
     password: string;
}
