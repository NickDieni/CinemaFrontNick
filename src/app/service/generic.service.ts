import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class GenericService<T> {
    //ArrayName : any[] = [];
    urlTest: string = "https://localhost:7254/api"
    genericGetAll(endPoint:string):Observable<T[]>{
      return this.http.get<T[]>(this.urlTest+"/"+endPoint);
    }
    genericDelete(idToDelete:number, endPoint:string):Observable<T>{
      return this.http.delete<T>(this.urlTest+"/"+endPoint+"/"+idToDelete);
    }
    genericGetById(idToGet:number, endPoint:string):Observable<T>{
      return this.http.get<T>(this.urlTest+"/"+endPoint+"/"+idToGet);
    }
    
    constructor(private http:HttpClient) { }
  }