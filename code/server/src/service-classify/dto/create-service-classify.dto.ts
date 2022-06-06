import { ApiProperty } from "@nestjs/swagger";

export class CreateServiceClassifyDto {
     @ApiProperty()
     serviceId: string;
     @ApiProperty()
     classifyCode: string;
     @ApiProperty()
     maxPrice: number;
     @ApiProperty()
     minPrice: number;
}
