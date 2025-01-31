import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostalCode } from '../../models/postalcode';
import { PostalcodeService } from '../../service/postalcode.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { GenericService } from '../../service/generic.service';

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
  ComponentNameValueUser: string = "Users";
  ComponentNameValuePostal: string = "PostalCodes";

  // HTML Forms -- Reactive Forms
  userForm: FormGroup = new FormGroup({
    UserId: new FormControl(''),
    UserName: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    PostalCodeId: new FormControl('', [Validators.required]),
  });



  onSubmit(): void {
    console.log(this.userForm);
    console.log(this.userForm.valid);
    console.log(this.userForm.controls);

    if (this.userForm.valid) {
      const formData = this.userForm.value;
      
      if (formData.UserId) {
        // Update existing user
        this.service2.genericUpdate(formData, this.ComponentNameValueUser, formData.UserId).subscribe(
          (response) => {
            console.log('Success to Update User', response);
            const index = this.userList.findIndex(user => user.userId === formData.UserId);
            if (index !== -1) {
              this.userList[index] = response;
            }
            this.userForm.reset();
            formData.UserId = null;
          },
          (error) => {
            console.log('Failed to Update User', error);
          }
        );
      } else {
        // Create new user
        this.service.createUser(formData).subscribe(
          (response) => {
            console.log('Success to Create User', response);
            this.userList.push(response);
            this.userForm.reset();
          },
          (error) => {
            console.log('Failed to Create User', error);
          }
        );
      }
    } else {
      alert('Please Fill out the form or else...');
    }
  }

  deleteUserById(UserID: number) {
    this.service.delete(UserID);

    this.userList = this.userList.filter((user) => user.userId !== UserID);
  }
  getUserWithId(UserID: number) {
    this.service.getUserById(UserID).subscribe((data) => {
      console.log('Success to Get User By Id', data);
      this.userList = Array.isArray(data) ? data : [data]; // Ensure userList is always an array
    });
  }
  getUsersWithIdGeneric(UserID: number) {
    this.service2.genericGetById(UserID, this.ComponentNameValueUser).subscribe((data) => {
      console.log('Success To Get ', this.ComponentNameValueUser, ' By Id', data);
      return (this.userList = [data]);
    });
  }
  getAllUsers() {
    this.service.getallUser().subscribe((data) => {
      console.log('Success To Get All Users', data);
      this.userList = Array.isArray(data) ? data : [data];
    });
  }

  ngOnInit() {

    this.getAllUsers();

    this.service1.getallPostalCodes().subscribe((data1) => {
      console.log('Success To Get PostalCodes In Users', data1);
      this.postalList = Array.isArray(data1) ? data1 : data1;
      console.log(this.postalList);
    });




    
    //return this.userList, this.postalList;
  }

  constructor(
    private service: UserService,
    private service1: PostalcodeService,
    private service2: GenericService<User>
  ) {}
}
