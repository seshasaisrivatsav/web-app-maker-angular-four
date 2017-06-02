import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/userService.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //properties
  username : String;
  password : String;
  vpassword : String;


  register(username, password){
    this._userService.register(username, password);
  }

  constructor(private _userService : UserService) { }

  ngOnInit() {
  }

}
