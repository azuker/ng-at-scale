console.log('a');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

console.log('a1');
import { initializePlayground, PlaygroundModule } from 'angular-playground';
console.log('a2');
initializePlayground('app-root');
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
console.log('b');
