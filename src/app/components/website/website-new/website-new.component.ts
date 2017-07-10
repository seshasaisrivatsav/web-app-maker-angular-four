import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  //todo alerts when trying to submit form without filling name and description of new website

  constructor() { }

  ngOnInit() {
  }

}
