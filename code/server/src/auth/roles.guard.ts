import {CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException} from "@nestjs/common";
import {Reflector} from "@nestjs/core";
import {JOB_KEY, ROLES_KEY} from "../decorators/role.decorator";
import {PartnerJob, UserRoles} from "../enums/roles";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<UserRoles[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredRoles || requiredRoles.length == 0) {
            return true;
        }
        const {user} = context.switchToHttp().getRequest();

        if (!user.type) throw new UnauthorizedException({success: false, message: "USER_TYPE_NOT_EXIST"})

        if (requiredRoles.includes(UserRoles.ALL)) return true

        if (user.type == UserRoles.ADMIN) return true;

        if (user.type == UserRoles.PARTNER) {
            const requiredJob = this.reflector.getAllAndOverride<PartnerJob[]>(JOB_KEY, [context.getHandler(), context.getClass()]);
            if (user.job === PartnerJob.ADMIN) return true;

            if (!requiredJob.includes(user.job)) throw new ForbiddenException({
                success: false,
                message: "USER_ROLE_DENIED"
            })
            return true;
        }

        if (!requiredRoles.includes(user.type)) throw new ForbiddenException({
            success: false,
            message: "USER_ROLE_ERROR"
        })

        return true;
    }
}
