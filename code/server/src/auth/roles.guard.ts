import {Injectable, CanActivate, ExecutionContext, ForbiddenException} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorators/role.decorator";
import { UserRoles } from "../enums/roles";

@Injectable()
export class RolesGuard implements CanActivate {
     constructor(private reflector: Reflector) {}

     canActivate(context: ExecutionContext): boolean {
          const requiredRoles = this.reflector.getAllAndOverride<UserRoles[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);
          if (!requiredRoles) {
               return true;
          }
          const { user } = context.switchToHttp().getRequest();

          if(user.type === UserRoles.ADMIN) return true;

          if(!requiredRoles.includes(user.type)) throw new ForbiddenException(null, "USER_ROLE_ERROR")

          return true;
     }
}
