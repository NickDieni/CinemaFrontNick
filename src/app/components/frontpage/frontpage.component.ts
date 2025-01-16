import { Component } from '@angular/core';
import { GenericService } from '../../service/generic.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-frontpage',
  imports: [],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent {

  movieList: Movie[] = [];
  endpointName: string = 'Movies';

  getAllMovies(): void {
    this.service.genericGetAll(this.endpointName).subscribe(
      (response) => {
        console.log('Success to get all movies', response);
        this.movieList = response;
      },
      (error) => {
        console.log('Failed to get all movies', error);
      }
    );
  }
  ngOnInit() {
    this.getAllMovies();
  }


  constructor(
    private service: GenericService<Movie>,
  ) {}
}
