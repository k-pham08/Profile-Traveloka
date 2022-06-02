import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {catchError, map, Observable} from "rxjs";
import {Response} from "./types";
import {AxiosResponse, Method} from 'axios';
import {User} from "../entities/User";
import {UserRoles} from "../enums/roles";
import {METHODS} from "http";

@Injectable()
export class VoucherService {
    private HOST: string = "https://api.votuan.xyz/api/v1";

    private servicesOfVoucher = {
        "VILLA-APARTMENT": "APART",
        "FLIGHT": "FLIGHT",
        "AIRPORT-PICKLES": "AIRPORT",
        "HOTEL": "HOTEL",
        "RESTAURANT": "EATS",
        "CAR-RENTAL": "CARRENTAL",
        "TOUR": "XPERIENCE",
        "SAVING-COMBO": "COMBO"
    }

    constructor(private httpService: HttpService) {
    }

    requestServer<T = any>(method: Method, path: string = "/", data: string | object = ""): Observable<AxiosResponse<T>> {
        const request = this.httpService.request({
            method: method || "GET",
            url: this.HOST + path,
            data,
            headers: {
                APP_CODE: "VY03"
            }
        })
        return request.pipe(map(response => response.data)) as Observable<AxiosResponse<T>>;
    }

    registerVoucherService(user: User) {
            const {type, userId, email, password, companyName, username, services} = user;

            const path = `/${type == UserRoles.PARTNER ? "partner" : "user"}/auth/register`

            let data = {}
            if (type == UserRoles.USER) {
                data = {userId, email};
            } else {
                const matchServices = services.map((service) => {
                    return this.servicesOfVoucher[service.serviceCode];
                })
                data = {
                    email, name: companyName, username, typeVouchers: matchServices, password
                }
            }

            return this.requestServer<Response>("POST", path, data).toPromise();
    }

    login(username: string, type: string) {
        return this.requestServer("POST", `/${type == UserRoles.PARTNER ? "partner" : "user"}/auth/login`, {username, email: username, password: "none"}).toPromise();
    }
}