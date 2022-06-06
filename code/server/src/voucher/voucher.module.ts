import { Module } from '@nestjs/common';
import { VoucherService } from './voucher.service';
import {HttpModule} from "@nestjs/axios";
import { VoucherController } from './voucher.controller';
import {UserModule} from "../user/user.module";

@Module({
  imports: [HttpModule, UserModule],
  providers: [VoucherService],
  exports: [VoucherService],
  controllers: [VoucherController]
})
export class VoucherModule {}
