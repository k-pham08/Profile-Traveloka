import { Module } from '@nestjs/common';
import { PriceBracketService } from './price-bracket.service';
import { PriceBracketController } from './price-bracket.controller';

@Module({
  controllers: [PriceBracketController],
  providers: [PriceBracketService]
})
export class PriceBracketModule {}
