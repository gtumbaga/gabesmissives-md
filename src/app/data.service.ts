import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  wpServer: String = "https://admin.gabesmissives.com";

  constructor(private http: HttpClient) { }

  getBlogPosts() {
    return this.http.get(this.wpServer + '/wp-json/wp/v2/posts/')
  }

  getSinglePost(blogSlug) {
    return this.http.get(this.wpServer + '/wp-json/wp/v2/posts?slug=' + blogSlug)
  }

  public getPage = (pageID) => {
    return this.http.get(this.wpServer + "/wp-json/wp/v2/pages/26");
  }
}
