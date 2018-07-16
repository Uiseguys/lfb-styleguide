import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@ui-guys/stencil-bs-ui-lib';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
} else {
  defineCustomElements(window);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
