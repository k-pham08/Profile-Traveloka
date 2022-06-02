import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import {HttpModule} from "@nestjs/axios";
import { VoucherController } from './voucher.controller';

@Module({
  imports: [HttpModule],
  providers: [VoucherService],
  exports: [VoucherService],
  controllers: [VoucherController]
})
export class VoucherModule {}
