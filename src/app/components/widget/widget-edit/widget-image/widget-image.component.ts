import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {

  flag = false;
  widget = {};
  userId: string;
  websiteId: string;
  pageId: string;
  widgetId: string;
  baseUrl: string;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

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

    // fetching current widget based on widgetId
    this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => this.widget = data,
        (error: any) => console.log(error)
      );

  }

  updateWidget() {

    // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible

      this.widgetService.updateWidget(this.widgetId, this.widget)
        .subscribe(
          (data: any) => this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
          (error: any) => console.log(error)
        );

  }

  deleteWidget() {

    // call delete widget function from widget client service
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (data: any) => this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']),
        (error: any) => console.log(error)
      );

  }

}
