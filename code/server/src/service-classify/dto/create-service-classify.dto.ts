import { ApiProperty } from "@nestjs/swagger";

export class CreateServiceClassifyDto {
     @ApiProperty()
     name: string;
     @ApiProperty()
     serviceId: string;
}
