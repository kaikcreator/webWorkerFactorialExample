import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

// import general styles with webpack
require('./styles.css');


if (environment.production) {
  enableProdMode();
}
import {bootstrapWorkerUi} from '@angular/platform-webworker';
bootstrapWorkerUi('../webworker.js');
