/**
 * Created by mayankrd on 8/13/17.
 */
import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';
declare var jQuery: any;

@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit {

  @Output() newIndexes = new EventEmitter(); // this will emit an event for the parent component or the directive calling component

  initialIndex: any;

  constructor(private el: ElementRef, private sharedService: SharedService) {
  }

  // Lifecycle hook that is called after a component's view has been fully initialized
  ngAfterViewInit() {

    this.appSortable(this);

  }

  appSortable(refe) {
    jQuery(this.el.nativeElement).sortable({
      axis: 'y',
      start: function (event, ui) {
        console.log('Old position: ' + ui.item.index());
        refe.initialIndex = ui.item.index();
        refe.sharedService.widgetPos.initialIndex = ui.item.index();;
      },
      stop: function (event, ui) {
        console.log('New position: ' + ui.item.index());
        refe.newIndexes.emit({
          startIndex: refe.initialIndex,
          endIndex: ui.item.index()});
      }
    });
  }
}
