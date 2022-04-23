import { PartialType } from '@nestjs/swagger';
import { CreateServiceClassifyDto } from './create-service-classify.dto';

export class UpdateServiceClassifyDto extends PartialType(CreateServiceClassifyDto) {}
