import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from "@angular/router";
import {WidgetService} from "../../../services/widget.service.client";

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets = [{}];
  widget = {};
  userId: string;
  websiteId: string;
  pageId: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private sanatiizer: DomSanitizer) { }

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

    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe(
        (data: any) => {
          this.widgets = data;
          console.log(this.widgets);
        }
      );

  }

  checkSafeHtml(html) {

    // var html = this.widget.text;
    // return $sce.trustAsHtml(html);
  }

  checkSafeYoutubeUrl() {

    return 'https://www.youtube.com/embed/watch?v=e3VsKheoeBE';

    // console.log(url);
    //
    // var parts = url.split('/');
    // var id = parts[parts.length - 1];
    // url = "https://www.youtube.com/embed/" +id;
    // console.log(url);
    // return this.sanatiizer.bypassSecurityTrustUrl(url);
  }

}
