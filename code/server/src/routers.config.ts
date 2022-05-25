import { ServiceModule } from "./service/service.module";
import { ServiceClassifyModule } from "./service-classify/service-classify.module";
import { UserModule } from "./user/user.module";
import { Routes } from "@nestjs/core";
import {AuthModule} from "./auth/auth.module";

export const routers: Routes = [
     {
          path: "api",
          children: [AuthModule, ServiceModule, ServiceClassifyModule, UserModule],
     },
];
