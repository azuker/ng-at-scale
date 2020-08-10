import { enableProdMode, NgModuleRef, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableDebugTools } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

function enableNgDebugTools(moduleRef: NgModuleRef<any>, enablePerf = false) {
  // enable ng debug tools - makes the profiler available
  // source - https://github.com/angular/angular/blob/master/docs/TOOLS.md
  if (!enablePerf) {
    return;
  }
  const applicationRef = moduleRef.injector.get(ApplicationRef);
  const appComponent = applicationRef.components[0];
  enableDebugTools(appComponent);
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => enableNgDebugTools(moduleRef, environment.perf))
  .catch(err => console.error(err));
