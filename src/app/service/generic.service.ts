import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GenericService<ExampleModel> {
    //ArrayName : any[] = [];
    urlTest: string = "https://localhost:7254/api/"
    getAlls(endPoint:string):Observable<ExampleModel[]>{
      return this.http.get<ExampleModel[]>(this.urlTest+"/"+endPoint);
  
    }


    constructor(private http:HttpClient) { }
  }