import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FactorialService } from './factorial.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FactorialService],
  bootstrap: [AppComponent]
})
 export class AppModule { }

