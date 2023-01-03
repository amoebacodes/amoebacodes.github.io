import { ViewportScroller } from "@angular/common";
import { Component, OnInit, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'amoebacodes';
  where = '';

  constructor(private scroller: ViewportScroller, private router: Router){}
  ngOnInit() {
    this.router.navigate(["/"]);
  }
  goToDiv(anchorId:string) {
    this.scroller.scrollToAnchor(anchorId)
  }
}
