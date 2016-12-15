import { NgModule } from '@angular/core';
import {WorkerAppModule} from '@angular/platform-webworker';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { FactorialService } from './factorial.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WorkerAppModule,
    FormsModule
  ],
  providers: [FactorialService],
  bootstrap: [AppComponent]
})
 export class AppModule { }

