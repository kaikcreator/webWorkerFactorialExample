import './polyfills.ts';
import '@angular/core';
import '@angular/common';
/*import '@angular/platform-webworker';*/
import '@angular/platform-webworker-dynamic';

import {platformWorkerAppDynamic} from '@angular/platform-webworker-dynamic';
import { AppModule } from './app/';

platformWorkerAppDynamic().bootstrapModule(AppModule);