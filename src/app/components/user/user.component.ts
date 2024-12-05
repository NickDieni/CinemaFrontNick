import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PostalCode } from '../../models/postalcode';
import { PostalcodeService } from '../../service/postalcode.service';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
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
  userIdList: string[] = [];
  postalList: PostalCode[] = [];

  // HTML Forms -- Reactive Forms
  userForm: FormGroup = new FormGroup({
    UserId: new FormControl(),
    UserName: new FormControl(),
    Password: new FormControl(),
    Email: new FormControl(),
    PostalCodes: new FormControl(),
  });

  onSubmit(): void {
    console.log(this.userForm.get(['Username'])?.value);
  }
  JuleNisse(idToDeleteAgain:number): void {
    console.log("Deleting");
    console.log(idToDeleteAgain);
  }

  // GetAllUsers - returnerer alle User objekter
  getall(): User[] {
    return this.userList;
  }

  deleteUserById(UserID: number) {
    this.service.delete(UserID);

    this.userList = this.userList.filter((user) => user.userId !== UserID);
  }
  getUserWithId(UserID: number) {
    this.service.getUserById(UserID).subscribe((data) => {
      console.log('Success to Get User By Id', data);
      return (this.userList = data);
    });
  }

  ngOnInit() {
    this.service.getallUser().subscribe((data) => {
      console.log('Success To Get All Users', data);
      this.userList = data;
    });

    this.service1.getallPostalCodes().subscribe((data1) => {
      console.log('Success To Get PostalCodes In Users', data1);

      this.postalList = data1;
    });
    return this.userList, this.postalList;
  }

  constructor(
    private service: UserService,
    private service1: PostalcodeService
  ) {}
}
