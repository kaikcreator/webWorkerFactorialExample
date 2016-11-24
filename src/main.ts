import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}
import {bootstrapWorkerUi} from '@angular/platform-webworker';
bootstrapWorkerUi('../webworker.js');
