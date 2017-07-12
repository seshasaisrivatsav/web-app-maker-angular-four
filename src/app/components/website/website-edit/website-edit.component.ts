import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})

export class WebsiteEditComponent implements OnInit {

  user = {};
  userId : String;

  constructor() { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userId = this.user['_id'];
  }

}
