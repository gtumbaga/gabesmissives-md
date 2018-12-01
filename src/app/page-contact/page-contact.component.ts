import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.scss']
})
export class PageContactComponent implements OnInit {
  pageSrc: string;
  constructor() {
    this.pageSrc = "https://data.gabesmissives.com/pages/contact.md";
  }

  ngOnInit() {
  }

}
