import { Component, OnInit } from '@angular/core';
import {PageService} from "../../../services/page.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  pages = {};
  websiteId: string;

  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // reading websiteId from url params
    this.activatedRoute.params
      .subscribe(
        (params: any) => this.websiteId = params['websiteId']
      );

    // fetching list of pages
    this._pageService.findPageByWebsiteId(this.websiteId)
      .subscribe(
        (data: any) => {this.pages = data; console.log(data);},
        (error: any) => console.log(error)
      );

  }

}
