import { Test, TestingModule } from '@nestjs/testing';
import { ServiceClassifyService } from './service-classify.service';

describe('ServiceClassifyService', () => {
  let service: ServiceClassifyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceClassifyService],
    }).compile();

    service = module.get<ServiceClassifyService>(ServiceClassifyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
