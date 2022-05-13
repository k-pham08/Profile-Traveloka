import {BadGatewayException, Injectable, NestMiddleware} from "@nestjs/common";
import {NextFunction, Request, Response} from "express";
import {userDTO} from "../../dtos/userDTO";

@Injectable()
export class SignupMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const user: userDTO = new userDTO(req.body);

        if(!user.isValid()) {
            throw new BadGatewayException();
        }

        res.locals.user = user;
        next();
    }
}