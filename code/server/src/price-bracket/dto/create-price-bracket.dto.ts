import { ApiProperty } from "@nestjs/swagger";

export class CreatePriceBracketDto {
     @ApiProperty()
     maxPrice: number;
     @ApiProperty()
     minPrice: number;
     @ApiProperty()
     classifyCode: string;
}
