import { ApiProperty, PartialType } from "@nestjs/swagger";

export class UpdateAccountDto {
     @ApiProperty()
     password: string;
}
