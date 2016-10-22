import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; /* multiplataforma*/
import { AppComponent }   from './app.component';
import {FormsModule} from '@angular/forms'; /* validaciones */
@NgModule({ /* metadata global */
  imports:      [ BrowserModule,
	  FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
