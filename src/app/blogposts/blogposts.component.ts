import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.scss']
})
export class BlogpostsComponent implements OnInit {


  blogposts$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBlogPosts().subscribe(
      data => this.blogposts$ = data
    )
  }

}
