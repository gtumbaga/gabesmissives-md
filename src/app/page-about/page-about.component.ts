import { Component, OnInit } from '@angular/core';

import { DataService } from "../data.service";

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {
  contentAbout = [];

  constructor(public dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getPage(26)
    .subscribe(data => {
      this.contentAbout = data["content"]["rendered"];
    })
  }

}
