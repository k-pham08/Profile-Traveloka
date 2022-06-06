import { ApiProperty } from "@nestjs/swagger";
import {CreateServiceClassifyDto} from "../../service-classify/dto/create-service-classify.dto";

export class CreateServiceDto {
    @ApiProperty()
    serviceCode: string;
    @ApiProperty()
    serviceName: string;
    @ApiProperty()
    serviceClassifies: CreateServiceClassifyDto[];
}
