import { Component } from '@angular/core';
import { PostalcodeService } from '../../service/postalcode.service';
import { PostalCode } from '../../models/postalcode';
import { GenericService } from '../../service/generic.service';

@Component({
  selector: 'app-postalcode',
  imports: [],
  templateUrl: './postalcode.component.html',
  styleUrl: './postalcode.component.css'
})
export class PostalcodeComponent {
  postalList: PostalCode[] = [];
  ComponentNameValue: string = "PostalCodes";
  

  GetPostalbyid(PostalId: number){
    this.service.genericGetById(PostalId, this.ComponentNameValue).subscribe((data) => {
      console.log('Success to Get ', this.ComponentNameValue,  ' By Id', data);
      return (this.postalList = [data]);
    });
  }

  deletePostalCode(PostalCodeId: number) {
    console.log("Deleting ", PostalCodeId);
    this.service.genericDelete(PostalCodeId, this.ComponentNameValue).subscribe((data) => {
      
      console.log("Success to Delete ", this.ComponentNameValue, " By Id", data);
    });

    this.postalList = [];
    console.log(this.postalList);
  }

  ngOnInit(){
    this.service.genericGetAll('PostalCodes').subscribe(data => {
      console.log("Success To Get PostalCodes", data); 
      this.postalList = Array.isArray(data) ? data : [data];
    });
  }

  constructor(private service2:PostalcodeService, 
    private service:GenericService<PostalCode>
  ){}

}
