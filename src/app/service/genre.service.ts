import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  urlGetGenre : string = "https://localhost:7254/api/Genres";
  getallGenres():Observable<Genre[]>{
    return this.http.get<Genre[]>(this.urlGetGenre);

  }

  constructor(private http:HttpClient) { }
}
