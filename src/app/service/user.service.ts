import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// This is our entry to API
export class UserService {

  //JSON eller SML - formatters
  //GET, POST, PUT, DELETE
  
  //Version 1 - Hardcoded!
  //getall():User[]{return [
  //  {UserId:12, Username:"PalleAlle", Password:"LoneErGrim", Email:"PalleEr@Sej.dk", PostalCodes:1234},
  //  {UserId:13, Username:"Bo", Password:"BoKo", Email:"Kobo@Sej.dk", PostalCodes:2381}
  //]}

  //userList:User[] = [
  //  {UserId:12, Username:"PalleAlle", Password:"LoneErGrim", Email:"PalleEr@Sej.dk", PostalCodes:1234},
  //  {UserId:13, Username:"Bo", Password:"BoKo", Email:"Kobo@Sej.dk", PostalCodes:2381}
  //]
  //getall2():User[]{return this.userList; }
  
  //URL
  urlGetUser: string = "https://localhost:7254/api/Users";

  delete(idToDelete:number):void{
    this.http.delete(this.urlGetUser+"/"+idToDelete).subscribe();
  }
  getUserById(idToGet:number):Observable<User[]>{
    return this.http.get<User[]>(this.urlGetUser+"/"+idToGet);
  }
  getallUser():Observable<User[]>{
    return this.http.get<User[]>(this.urlGetUser);
  }
  getallGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>(this.urlGetGenre);

  }
  ArrayName : any[] = [];
  urlTest: string = "https://localhost:7254/api/"
  getallGenres(endPoint:string):Observable<ArrayName[]>{
    return this.http.get<ArrayName[]>(this.urlTest+"/"+endPoint);

  }

  constructor(private http:HttpClient) { }

}
