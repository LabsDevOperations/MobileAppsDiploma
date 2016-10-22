import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; /* multiplataforma*/
import { AppComponent }   from './app.component';
import {FormsModule} from '@angular/forms'; /* validaciones y binding */
@NgModule({ /* metadata global */
  imports:      [ BrowserModule,
	  FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
