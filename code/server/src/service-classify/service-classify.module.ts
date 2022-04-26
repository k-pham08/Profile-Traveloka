import { Module } from '@nestjs/common';
import { ServiceClassifyService } from './service-classify.service';
import { ServiceClassifyController } from './service-classify.controller';

@Module({
  controllers: [ServiceClassifyController],
  providers: [ServiceClassifyService]
})
export class ServiceClassifyModule {}
