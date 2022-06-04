import {BadRequestException, Injectable, NestMiddleware} from "@nestjs/common";
import {UserRoles} from "../../enums/roles";

@Injectable()
export class UpdateUserMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void): any {
        const {address, dob, email, name, gender, phone, type, username} = req.body;

        if (!address || !dob ||!email || !name || typeof gender != 'boolean' || !phone || !type || !username) {
            throw new BadRequestException({success: false, message: "UPDATE_DATA_INVALID"})
        }

        next();
    }
}