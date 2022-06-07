import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDetailDto {
    @ApiProperty()
    productName: string;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    price: number;
    @ApiProperty()
    thumbnail: string;
    @ApiProperty()
    link: string;
}
