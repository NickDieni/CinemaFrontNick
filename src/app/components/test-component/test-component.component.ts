import { Component } from '@angular/core';
import { GenericService } from '../../service/generic.service';
import { Genre } from '../../models/genre';

@Component({
  selector: 'app-test-component',
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {

  ngOnInit(){
    this.service.getAlls("Genres");
  }

  constructor(private service:GenericService<Genre>){}
}
