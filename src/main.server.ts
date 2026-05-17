import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, {
  ...config,
  providers: [
    ...config.providers,
    provideHttpClient(withFetch()),
    provideToastr({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ]
}, context);
export default bootstrap;