import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostalCode } from '../../models/postalcode';
import { PostalcodeService } from '../../service/postalcode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, CommonModule],
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
    UserName: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    PostalCodes: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    console.log(this.userForm);
    console.log(this.userForm.valid);
    console.log(this.userForm.controls);
    debugger;
    if (this.userForm.valid){
      const formData = this.userForm.value;
      this.service.createUser(formData);
      console.log("Success to Create User", formData);
      this.userList.push(formData);
      this.userForm.reset();
      
    } //else {
      //alert ("Please Fill out the form or else...");
    //}
  
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

    this.userForm = new FormGroup({
      UserName: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      PostalCodeId: new FormControl('', [Validators.required]),
    });

    return this.userList, this.postalList;
  }

  constructor(
    private service: UserService,
    private service1: PostalcodeService
  ) {}
}
