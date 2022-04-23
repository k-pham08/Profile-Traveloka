import { ApiProperty } from "@nestjs/swagger";

export class CreatePriceBracketDto {
     name: string;
     @ApiProperty()
     maxPrice: number;
     @ApiProperty()
     minPrice: number;
     @ApiProperty()
     serClassifyId: string;
}
