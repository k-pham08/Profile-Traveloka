import { Test, TestingModule } from '@nestjs/testing';
import { PriceBracketController } from './price-bracket.controller';
import { PriceBracketService } from './price-bracket.service';

describe('PriceBracketController', () => {
  let controller: PriceBracketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceBracketController],
      providers: [PriceBracketService],
    }).compile();

    controller = module.get<PriceBracketController>(PriceBracketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
