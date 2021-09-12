import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
require('dotenv').config();

@Injectable()

export class HttpHeadersInterceptors implements HttpInterceptor{
    constructor(){}


    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        req=req.clone({
            setHeaders:{
                'x-rapidapi-key':'esGbwrm390mshS2BCl0RALxQRtZTP1W7sFMjsnyJlJzDXVKW0H',
                'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com',
            },
            setParams:{
                key:process.env.API_KEY,
            }
        });
        return next.handle(req);
    }
}