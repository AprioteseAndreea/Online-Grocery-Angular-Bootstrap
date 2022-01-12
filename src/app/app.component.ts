import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChildToParentService } from './app-logic/child-to-parent.service';
import { VERSION, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  title = 'online-grocery';
  cart!: number;

  constructor(private router: Router, private childToParentService: ChildToParentService,  private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any) {
    this.childToParentService.data$.subscribe(res => {
      this.cart=res;
    } );
  }
  ngOnInit(): void {
    this.cart = 0;
  }
 
  onActivate(componentReference:any) {

 } public scroll(): void {
  this.pageScrollService.scroll({
    document: this.document,
    scrollTarget: '.theEnd'
  });
}
}


