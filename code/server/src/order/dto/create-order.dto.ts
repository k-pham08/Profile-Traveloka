import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
     @ApiProperty()
     orderId: string;
     @ApiProperty()
     createdAt: Date;
     @ApiProperty()
     total: number;
     @ApiProperty()
     serviceId: string;
     @ApiProperty()
     userId: string;
}
