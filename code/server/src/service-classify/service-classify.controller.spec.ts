import { Test, TestingModule } from '@nestjs/testing';
import { ServiceClassifyController } from './service-classify.controller';
import { ServiceClassifyService } from './service-classify.service';

describe('ServiceClassifyController', () => {
  let controller: ServiceClassifyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceClassifyController],
      providers: [ServiceClassifyService],
    }).compile();

    controller = module.get<ServiceClassifyController>(ServiceClassifyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
