import { Component } from '@angular/core';
import { PostalcodeService } from '../../service/postalcode.service';
import { Genre } from '../../models/genre';
import { GenreService } from '../../service/genre.service';

@Component({
  selector: 'app-genre',
  imports: [],
  templateUrl: './genre.component.html',
  styleUrl: './genre.component.css'
})
export class GenreComponent {
  genreList: Genre[] = [];

  ngOnInit(){
    this.service.getallGenres().subscribe(
    data=>{
      console.log("Success To Get Genres");
  
      this.genreList=data;
      console.log(this.genreList);
    }
    )
  
  }
  constructor(private service:GenreService){}
}
