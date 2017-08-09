import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {UserService} from "../../../services/userService.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //properties
  username : String;
  firstName : String;
  lastName : String;
  email : String;
  user = {};
  userId : String;
  errorFlag : boolean;
  errorMsg = 'Invalid username or password !';


  constructor(private _UserService: UserService) { }

  ngOnInit() {

    this.getUser();

  }

  logout() {
    localStorage.clear();
  }


  getUser() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
    this.userId = this.user['_id'];
  }


  updateUser() {
    let updatedUser = {
      _id : this.user['_id'],
      username : this.username,
      firstName :this.firstName,
      lastName :  this.lastName,
      email : this.email

    };


    this._UserService.updateUser(updatedUser)
      .subscribe(
      (data: any) => {
        this._UserService.findUserById(updatedUser._id)
          .subscribe(
            (data: any) => {
              console.log(data);
              localStorage.setItem('user', JSON.stringify(data));
              this.ngOnInit();
            }
          )
      },
      (error: any) => this.errorFlag = true
    );
      // .toPromise()
      // .then( data => {
      //   this._UserService.findUserById(updatedUser._id)
      //     .toPromise()
      //     .then( data => {
      //       localStorage.setItem('user', JSON.stringify(data));
      //
      //       this.ngOnInit();
      //     })
      // })
  }

}
