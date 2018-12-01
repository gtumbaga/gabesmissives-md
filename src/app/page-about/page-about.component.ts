import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {
  pageSrc: string;
  constructor() {
    this.pageSrc = "https://data.gabesmissives.com/pages/about.md";
  }

  ngOnInit() {
    
  }

}
