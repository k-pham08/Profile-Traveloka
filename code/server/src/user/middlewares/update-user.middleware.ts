import {Injectable, NestMiddleware} from "@nestjs/common";

@Injectable()
export class UpdateUserMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: any) => void): any {
        console.log(req.body);
    }
}