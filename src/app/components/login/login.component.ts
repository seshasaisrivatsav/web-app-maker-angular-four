import { Component, OnInit } from '@angular/core';

import {UserService} from "../../services/userService.client";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //properties
  username : String;
  password : String;

  testresult: String;

  // TODO : fix this
  // login(username, password){
  //   this._userService.login(username, password);
  // }


  constructor(private route: ActivatedRoute, private router: Router, private _userService: UserService ){ }

  ngOnInit() {
  }


  login(){
    // this.router.navigate(['./profile'], {relativeTo: this.route});

    this._userService.login(this.username, this.password)
      .then(data => {
        console.log(data);
        this.testresult = data['_body'];
      });

  }

}
