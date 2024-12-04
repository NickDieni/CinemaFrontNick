import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostalCode } from '../models/postalcode';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostalcodeService {
  urlGetPostalCode: string = "https://localhost:7254/api/PostalCodes";


  getallPostalCodes():Observable<PostalCode[]>{
    return this.http.get<PostalCode[]>(this.urlGetPostalCode);

  }

  constructor(private http:HttpClient) { }
}
