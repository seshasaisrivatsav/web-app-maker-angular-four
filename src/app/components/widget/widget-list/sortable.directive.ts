/**
 * Created by mayankrd on 8/13/17.
 */
import {Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {AfterViewInit} from '@angular/core';
import {SharedService} from '../../../services/shared.service';
declare var jQuery: any;

@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit {

  //@Input() initialIndex;

  @Output() widgetIndex: EventEmitter<{start: any, end: any}> = new EventEmitter();

  initialIndex: any;
  constructor(private el: ElementRef, private sharedService: SharedService) {}

  // Lifecycle hook that is called after a component's view has been fully initialized
  ngAfterViewInit() {

    this.sorted(this);

  }

  sorted(refe) {
    jQuery(this.el.nativeElement).sortable({
      axis: 'y',
      start: function (event, ui) {
        console.log('Old position: ' + ui.item.index());
        refe.initialIndex = ui.item.index();
        //this.sharedService.widgetPos.initialIndex = this.initialIndex;
      },
      stop: function (event, ui) {
        console.log('New position: ' + ui.item.index());
        refe.widgetIndex.emit({start: refe.initialIndex, end: ui.item.index()});
        //this.sharedService.widgetPos.finalIndex = this.finalIndex;
      }
    });
  }
}
