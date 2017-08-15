import {AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {SortableDirective} from './sortable.directive';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

 // @ViewChild(SortableDirective) srtDir;
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

  // ngDoCheck () {
  //   console.log('ngDoCheck', this.srtDir.initialIndex);
  // }
  //
  // ngAfterViewInit () {
  //   console.log('ngAfterViewInit', this.srtDir.initialIndex);
  // }
  //
  // ngOnChanges () {
  //   console.log('ngOnChanges', this.srtDir.initialIndex);
  // }

  reorderWidgets(initialIndex: any, finalIndex: any) {
    // call widget service function to update widget as per index
    console.log(initialIndex, finalIndex);
  }

  posUpdate(widgetIndex) {
    console.log('Hi');
    console.log(widgetIndex);
  }
}
