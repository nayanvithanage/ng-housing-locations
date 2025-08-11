/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {App} from './app/app';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';

bootstrapApplication(App, 
  {
    providers: [provideProtractorTestingSupport(), provideRouter(routes)]
  }).catch((err) =>
  console.error(err),
);
