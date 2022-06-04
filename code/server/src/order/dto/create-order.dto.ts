import { ApiProperty } from "@nestjs/swagger";
import { Order } from "../../entities/Order";

export class CreateOrderDto {
     @ApiProperty()
     createdAt: Date;
     @ApiProperty()
     total: number;
     @ApiProperty()
     reward: number;
     @ApiProperty()
     details: {
          productName: string;
          quantity: number;
          price: number;
          thumbnail: string;
          link: string;
     }[];
     @ApiProperty()
     partnerId: string;
     @ApiProperty()
     userId: string;
}
