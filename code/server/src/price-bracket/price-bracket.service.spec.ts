import { Test, TestingModule } from '@nestjs/testing';
import { PriceBracketService } from './price-bracket.service';

describe('PriceBracketService', () => {
  let service: PriceBracketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceBracketService],
    }).compile();

    service = module.get<PriceBracketService>(PriceBracketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
