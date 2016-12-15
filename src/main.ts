import {bootstrapWorkerUi} from '@angular/platform-webworker';

// import general styles with webpack
require('./styles.css');


bootstrapWorkerUi('../webworker.js');
