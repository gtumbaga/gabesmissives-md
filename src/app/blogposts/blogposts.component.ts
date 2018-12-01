import { Component, OnInit } from '@angular/core';
//import blogsList  from '../../assets/blog/index.json';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.scss']
})
export class BlogpostsComponent implements OnInit {
  pageSrc: string;

  constructor() {
    this.pageSrc = "https://data.gabesmissives.com/pages/blogs.md";

  }

  ngOnInit() {
  }

}
