import { ApiProperty } from "@nestjs/swagger";

export class CreateServiceClassifyDto {
     @ApiProperty()
     classifyCode: string;
     @ApiProperty()
     max_price: string;
     @ApiProperty()
     min_price: string;
     @ApiProperty()
     serviceCode: string;
}
