import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  widget = {};
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  baseUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {

    // fetching baseUrl to server
    this.baseUrl = environment.baseUrl;

    // fetching all ids from route params
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.websiteId = params['websiteId'];
          this.pageId = params['pageId'];
          this.widgetId = params['widgetId'];
        }
      );

    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => this.widget = data,
        (error: any) => console.log(error)
      );

  }

}
