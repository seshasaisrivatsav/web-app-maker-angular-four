import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
declare var jQuery: any;

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  widgets = [{}];
  widget = {};
  websiteId: string;
  pageId: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private _eleRef: ElementRef) { }

  ngOnInit() {

    // fetch userId, pageId and websiteId from url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.pageId = params['pageId'];
        }
      );

    // fetching list of widgets using widget service
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe(
        (data: any) => {
          this.widgets = data;
          console.log(this.widgets);
        }
      );
  }
}
