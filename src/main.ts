import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/';


// import general styles with webpack
require('./styles.css');

platformBrowserDynamic().bootstrapModule(AppModule);
