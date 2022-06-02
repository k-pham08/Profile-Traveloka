import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserController} from "./user.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/User";
import {UpdateUserMiddleware} from "./middlewares/update-user.middleware";
import {ServiceModule} from "../service/service.module";

@Module({
    imports: [TypeOrmModule.forFeature([User]), ServiceModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer.apply(UpdateUserMiddleware).forRoutes({path: "/api/users/:id", method: RequestMethod.PUT});
    }
}
