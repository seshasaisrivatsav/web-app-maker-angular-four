import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //properties
  username : String;
  password : String;
  firstName : String;
  lastName : String;
  email : String;

  constructor() { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
  }

}
