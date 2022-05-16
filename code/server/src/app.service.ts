import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
     constructor() {}

     getHello(): string {
          return "Hello! this is the server Profile Traveloka Fake";
     }
}
