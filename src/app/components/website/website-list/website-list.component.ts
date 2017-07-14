import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  user = {};
  userId : String;
  websites = {};
  websiteId: string;
  sub: any;

  constructor(private _websiteService : WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getUser();
    this._websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (data) => {
          console.log(data);
          this.websites = data; },
        (error) => console.log(error)
      );
  }

  getUser(){
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userId = this.user['_id'];
  }
}
