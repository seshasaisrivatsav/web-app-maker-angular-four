/**
 * Created by mayankrd on 8/13/17.
 */
import {Directive, ElementRef} from '@angular/core';
import {AfterViewInit} from '@angular/core';
declare var jQuery: any;

@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    jQuery(this.el.nativeElement).sortable({
      axis: 'y',
      start: function (event, ui) {
        console.log('Old position: ' + ui.item.index());
      },
      stop: function (event, ui) {
        console.log('New position: ' + ui.item.index());
      }
    });
  }
}
