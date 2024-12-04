import { Component } from '@angular/core';
import { PostalcodeService } from '../../service/postalcode.service';
import { PostalCode } from '../../models/postalcode';

@Component({
  selector: 'app-postalcode',
  imports: [],
  templateUrl: './postalcode.component.html',
  styleUrl: './postalcode.component.css'
})
export class PostalcodeComponent {
  postalList: PostalCode[] = [];

  ngOnInit(){
    this.service.getallPostalCodes().subscribe(
    data=>{
      console.log("Success To Get PostalCodes");
  
      this.postalList=data;
      console.log(this.postalList);
    }
    )
  
  }
  constructor(private service:PostalcodeService){}

}
