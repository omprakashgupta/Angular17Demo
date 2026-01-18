import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/store/counter.reducer';
import { provideHttpClient, withInterceptorsFromDi, withInterceptors } from '@angular/common/http';
import { mockInterceptor } from './core/interceptor/mock.interceptor';
import { CustomReuseStrategy } from './route-reuse/CustomReuseStrategy';


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withInterceptors([mockInterceptor])),
        provideClientHydration(),
        provideAnimationsAsync(),
        provideStore({
            counter: counterReducer
        }),
        { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
    ]
};
