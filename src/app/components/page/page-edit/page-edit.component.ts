import { Component, OnInit } from '@angular/core';
import {PageService} from "../../../services/page.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;

  constructor(private _pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
