// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
// export { ServerAppModule } from './app/server.app.module';

// if (environment.production) {
//   enableProdMode();
// }

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BrowserAppModule } from './browser.app.module';
export { ServerAppModule } from './app/server.app.module';
import { environment } from './environments/environment';
import { from } from 'rxjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BrowserAppModule)
  .catch(err => console.error(err));
