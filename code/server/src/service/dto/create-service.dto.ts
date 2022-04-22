import { ApiProperty } from "@nestjs/swagger";

export class CreateServiceDto {
     @ApiProperty()
     serivceName: string;
}
