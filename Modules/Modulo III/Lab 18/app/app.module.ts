import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './component/app.component';
import { HttpModule } from "@angular/http";
//import { InMemoryWebApiModule } from "angular2-in-memory-web-api"; // no se necesita por que estamos invocando los datos desde el api

import { ProductDetailComponent } from './component/product-detail.component';
import { ProductService } from "./service/product.service";


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
      //, InMemoryWebApiModule.forRoot(InMemoryProductService, {delay: 500})
  ],
  declarations: [
      AppComponent,
      ProductDetailComponent
  ],
    providers: [ProductService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }