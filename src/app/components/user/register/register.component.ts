import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/userService.client";
import {Router} from "@angular/router";

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

  constructor(private _userService : UserService, private router: Router) { }

  ngOnInit() {
  }

  register(username, password){

      this._userService.register(username, password)
        .then(data => {
          if(data){
            localStorage.setItem('user', JSON.stringify(data));
            this.router.navigate(['/profile']);
          }
        });
    }

}
