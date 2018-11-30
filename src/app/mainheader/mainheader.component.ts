import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.scss']
})
export class MainheaderComponent implements OnInit {

  currentUrl: string;
  isCollapsed: boolean;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => {
      //this.currentUrl = _.url;
      this.currentUrl = router.url.toString();
      this.isCollapsed = true;
      //console.log(router.url.toString());
    });
  }

  ngOnInit() {
    this.isCollapsed = true;
  }

}
