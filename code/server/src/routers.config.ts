import { ServiceModule } from "./service/service.module";
import { ServiceClassifyModule } from "./service-classify/service-classify.module";
import { UserModule } from "./user/user.module";
import { Routes } from "@nestjs/core";
import {AuthModule} from "./auth/auth.module";
import {VoucherModule} from "./voucher/voucher.module";
import { OrderModule } from "./order/order.module";
import { OrderDetail } from "./entities/OrderDetail";
import { OrderDetailModule } from "./order-detail/order-detail.module";

export const routers: Routes = [
     {
          path: "/api",
          children: [AuthModule, ServiceModule, ServiceClassifyModule, UserModule, VoucherModule, OrderModule, OrderDetailModule],
     },
];
