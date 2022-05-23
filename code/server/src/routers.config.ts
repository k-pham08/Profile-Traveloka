import { ServiceModule } from "./service/service.module";
import { ServiceClassifyModule } from "./service-classify/service-classify.module";
import { UserModule } from "./user/user.module";
import { Routes } from "@nestjs/core";

export const routers: Routes = [
     {
          path: "api",
          children: [ServiceModule, ServiceClassifyModule, UserModule],
     },
];
