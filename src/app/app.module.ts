import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardComponent } from './components/card/card.component';
import { ChildToParentService } from './app-logic/child-to-parent.service';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    AboutComponent,
    HomePageComponent,
    CardComponent,
    CartCardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule.forRoot({ duration: 10 }),
    GoogleMapsModule
  ],
  providers: [ChildToParentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
