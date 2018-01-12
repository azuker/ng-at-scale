import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground } from 'angular-playground';
import { PlaygroundModule } from './app/playground.module';

initializePlayground('app-root');
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
