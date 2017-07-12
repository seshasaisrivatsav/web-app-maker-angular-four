import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebsiteService} from "../../../services/website.service.client";

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
  websiteId: string;
  websiteName: string;
  websiteDesc: string;
  website= {};

  constructor(private activatedRoute: ActivatedRoute, private _websiteService: WebsiteService, private router: Router) { }

  ngOnInit() {
    this.getUser();
    this.error = 'Enter the name of the website';
    this.alert = '* Enter the website name';

    // fetching activated route from current route's params
    this.activatedRoute.params.subscribe(params => {
      this.websiteId = params['websiteId'];
    });

    // getting websit details as per websiteId
    this._websiteService.findWebsiteById(this.websiteId)
      .subscribe(
        (data: any) => this.website = data
      );

  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userId = this.user['_id'];
  }

  updateWebsite(){

    this._websiteService.updateWebsite(this.websiteId, this.website)
      .subscribe(
        (data: any) => this.router.navigate(['/user', this.userId, 'website']),
        (error) => console.log("error this is: ", error)
      );
  }

  deleteWebsite(){

    this._websiteService.deleteWebsite(this.websiteId)
      .subscribe(
        (data: any) => this.router.navigate(['/user', this.userId, 'website']),
        (error) => console.log(error)
      );
  }

}
