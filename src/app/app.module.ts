import { NgModule } from '@angular/core';
import {WorkerAppModule} from '@angular/platform-webworker';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WorkerAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 export class AppModule { }

