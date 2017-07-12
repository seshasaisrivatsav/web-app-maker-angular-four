import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from "@angular/forms";
import {WebsiteService} from "../../../services/website.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  website = {
    name : '',
    description : '',
    developerId : ''
  };
  user = {};
  userId: string;

  //todo alerts when trying to submit form without filling name and description of new website

  constructor(private _websiteService: WebsiteService, private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  //url("/user/"+vm.userId+"/website");

  createWebsite(){
    console.log("create website in ts called", this.userId);
    this._websiteService.createWebsite(this.userId, this.website)
      .subscribe(
        (data: any) => this.router.navigate(['user/', this.userId, 'website']),
        (error: any) => console.log(error)
      );
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userId = this.user['_id'];
  }

}
