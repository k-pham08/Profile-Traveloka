import {CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {ROLES_KEY} from "../decorators/role.decorator";
import {UserRoles} from "../enums/roles";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<UserRoles[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);
        const {params} = context.switchToHttp().getRequest();

        if (!requiredRoles || requiredRoles.length == 0) {
            return true;
        }
        const {user} = context.switchToHttp().getRequest();

        if (!user.type) throw new UnauthorizedException({success: false, message: "USER_TYPE_NOT_EXIST"})

        if (requiredRoles.includes(UserRoles.ALL)) return true

        if (user.type == UserRoles.ADMIN) return true;

        if (requiredRoles.includes(UserRoles.SELF)) {
            if (params.id == user.userId) return true;

            throw new UnauthorizedException({
                success: false,
                message: "USER_ROLE_DENIED"
            })
        }

        if (!requiredRoles.includes(user.type))
            throw new UnauthorizedException({
                success: false,
                message: "USER_ROLE_DENIED"
            })

        return true;
    }
}
