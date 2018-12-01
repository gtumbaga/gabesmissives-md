import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-front',
  templateUrl: './page-front.component.html',
  styleUrls: ['./page-front.component.scss']
})
export class PageFrontComponent implements OnInit {
  pageSrc: string;
  
  constructor() {
    this.pageSrc = "https://data.gabesmissives.com/pages/front.md";
  }

  ngOnInit() {
  }

}
