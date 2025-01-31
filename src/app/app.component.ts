import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CrudComponent } from "./components/crud/crud.component";
import { UserComponent } from "./components/user/user.component";
import { PostalcodeComponent } from "./components/postalcode/postalcode.component";
import { GenreComponent } from "./components/genre/genre.component";
import { CommonModule } from '@angular/common';

//Decorator to define the component
@Component({
  selector: 'app-root', //How you get access your class
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html', //Your html page
  styleUrl: './app.component.css' //Defines if it should be styled
})

//export class AppComponent {
  //constructor(private router: Router) { }

  //navigateToFrontpage() {
    //this.router.navigate(['/frontpage']);
  //}
  //navigateToLogin() {
    //this.router.navigate(['/login']);
  //}
//}

export class AppComponent {
  
  title = 'CinemaFrontNick';
  //Variables
  //int x = 10; C#
  x : number = 10; //Typescript
  tal = 12; //JavaScript aka JS
  navn : string = "Jamie aka Steve Harvey";
  navne : string[] = ["Nick, Samie, Niklas"];
  arr2 : string[]=[]; //Nullifier array'et 
  sandt : boolean = true;


  //Funtions - methods
  // Invote / call - I HTML eller i en anden metode
  helloWorld():void{} // Signature / Prototype
  helloWorld2():void{
    console.log("Hello Wolrd")
  }

  ngOnInit():void{
    //console.log()
    this.helloWorld2();
  }
}
