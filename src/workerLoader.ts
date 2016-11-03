import './polyfills.ts';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';

// RxJS
import 'rxjs';
import {platformWorkerAppDynamic} from '@angular/platform-webworker-dynamic';
import { AppModule } from './app/';

platformWorkerAppDynamic().bootstrapModule(AppModule);