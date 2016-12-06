import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FactorialService } from './factorial.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot()
  ],
  providers: [FactorialService],
  bootstrap: [AppComponent]
})
 export class AppModule { }

