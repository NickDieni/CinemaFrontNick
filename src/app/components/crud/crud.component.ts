import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
// ng g c component/crud
// ng serve -o    Starter webserver op og åbner browser
// ctrl +c stopper webserver, skal stå inde i terminalen
export class CrudComponent {
  NameArray : string[] = [];
  ReadState : boolean = false;

  Create(text : string):void{
    this.NameArray.push(text);
  };

  Read():string[]
  {
    return this.NameArray;
  };
  ToggleRead():void{
    this.ReadState = !this.ReadState;
  }

  Update(data:string,newdata:string):void{
    let temp = this.NameArray.filter(x=>x.toLowerCase().indexOf(data.toLowerCase())>-1);
    console.log(temp);
    this.NameArray[this.NameArray.indexOf(temp[0])]=newdata;
    console.log("<br>"+this.NameArray);
  };

  DeleteLast():void{
    this.NameArray.pop();
  };

  ngOnInit():void{
    
  }
}
