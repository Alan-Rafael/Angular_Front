import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToggleServiceService } from './services/toggleService/toggle-service.service';
import { AuthInterceptor } from './auth-interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideHttpClient(withInterceptors([AuthInterceptor])), provideAnimationsAsync(), ToggleServiceService]
};
