import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { Constants } from "../helpers/constants";

@Injectable()
export class UserService{

    public helpers: Constants = new Constants();
    public url: string = this.helpers.urlApi();

    constructor(
        public _http: HttpClient,
    ){
   
    }

    login(user: User): Observable<any>{
        let json = JSON.stringify(user);
        let params = "json="+json;

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post(this.url+"/api/user/login",params, {headers: headers});
    }
        
}