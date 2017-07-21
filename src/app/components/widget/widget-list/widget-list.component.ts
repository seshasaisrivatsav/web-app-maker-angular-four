import { Component, OnInit } from '@angular/core';
import { NgSwitch } from '@angular/common';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widget = { size: "1" };
  userId: string;
  websiteId: string;
  pageId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // fetch userId, pageId and websiteId from url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
          this.pageId = params['pageId'];
        }
      );

  }

  checkSafeHtml(html) {

    // var html = this.widget.text;
    // return $sce.trustAsHtml(html);
  }

  checkSafeYoutubeUrl(url) {

    // var parts = url.split('/');
    // var id = parts[parts.length - 1];
    // url = "https://www.youtube.com/embed/" +id;
    // console.log(url);
    // return $sce.trustAsResourceUrl(url);
  }

}
