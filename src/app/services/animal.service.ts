
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Animal } from "../models/animal";
import { Constants } from "../helpers/constants";

@Injectable()
export class AnimalService{

    public helpers: Constants = new Constants();
    public url: string = this.helpers.urlApi();

    constructor(
        public _http: HttpClient,
    ){
   
    }

    getListActiveAnimals(): Observable<any>{
        let headers = new HttpHeaders().set('','');
        return this._http.get(this.url + "/api/animals/index");
    }

    getListAllAnimals(): Observable<any>{
        let headers = new HttpHeaders().set('','');
        return this._http.get(this.url + "/api/animals/indexAll");
    }

    getAnimalDetail(id: number): Observable<any>{
        let headers = new HttpHeaders().set('','');
        return this._http.get(this.url + "/api/animals/animal/detail/"+id)
    }

    getImageNames(id: number){
        let headers = new HttpHeaders().set('','');
        return this._http.get(this.url + "/api/animals/images_names/"+id)    
    }
        
}