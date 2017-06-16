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
  testresult : any;


  register(username, password){

    this._userService.register(username, password)
      .then(data => {
        console.log(data);
        this.testresult = data['_body'];
      });

  }

  constructor(private _userService : UserService) { }

  ngOnInit() {
  }

}
