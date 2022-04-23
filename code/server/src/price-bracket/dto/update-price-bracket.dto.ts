import { ApiProperty, PartialType } from "@nestjs/swagger";

export class UpdatePriceBracketDto {
     @ApiProperty()
     maxPrice: number;
     @ApiProperty()
     minPrice: number;
}
