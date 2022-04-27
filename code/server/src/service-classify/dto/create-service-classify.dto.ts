import { ApiProperty } from "@nestjs/swagger";

export class CreateServiceClassifyDto {
     @ApiProperty()
     classifyCode: string;
     @ApiProperty()
     serviceCode: string;
}
