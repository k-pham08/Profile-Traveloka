import { PartialType } from '@nestjs/swagger';
import { CreatePriceBracketDto } from './create-price-bracket.dto';

export class UpdatePriceBracketDto extends PartialType(CreatePriceBracketDto) {}
