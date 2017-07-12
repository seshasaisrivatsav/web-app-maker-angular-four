import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})

export class WebsiteEditComponent implements OnInit {

  user = {};
  userId : String;
  error : string;
  flag = false;
  alert : string;

  constructor() { }

  ngOnInit() {
    this.getUser();
    this.error = 'Enter the name of the website';
    this.alert = '* Enter the website name';
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userId = this.user['_id'];
  }

}
