import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})
export class BlogpostComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  post: string;
  dataURL: string;

  constructor(private route: ActivatedRoute) {
    this.dataURL = 'https://data.gabesmissives.com/posts/';
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      //this.post = '../../assets/blog/post/' +  params['id'] + '.md';
      this.post = this.dataURL +  params['id'] + '.md';
      //console.log(this.post);
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
