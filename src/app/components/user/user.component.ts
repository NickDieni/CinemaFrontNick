import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    //Use Case
    //vi opretter et array af User Objekter
    //Version1
    //userList: User[] = [
    //  {UserId:12, Username:"PalleAlle", Password:"LoneErGrim", Email:"PalleEr@Sej.dk", PostalCodes:1234},
    //  {UserId:13, Username:"Bo", Password:"BoKo", Email:"Kobo@Sej.dk", PostalCodes:2381}
    //];
    //Version2
    userList: User[] = [];


    // GetAllUsers - returnerer alle User objekter
    getall():User[]{return this.userList; }

    deleteUserById(UserID:number){
      this.service.delete(UserID);

      this.userList = this.userList.filter((user) => user.UserId !== UserID);
    }
    getUserWithId(UserID:number){
      this.service.getUserById(UserID).subscribe(data => {console.log("Success to Get User By Id");this.userList=data;console.log(this.userList);})
    }

    ngOnInit(){
      this.service.getallUser().subscribe(data=>{console.log("Success To Get All Users"); this.userList=data;console.log(this.userList);})
    } 

  constructor(private service:UserService){}

}
