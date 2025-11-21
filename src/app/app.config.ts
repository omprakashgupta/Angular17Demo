import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/store/counter.reducer';
import { provideHttpClient, withInterceptorsFromDi, withInterceptors } from '@angular/common/http';
import { mockInterceptor } from './core/interceptor/mock.interceptor';


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withInterceptors([mockInterceptor])),
        provideClientHydration(),
        provideAnimationsAsync(),
        provideStore({
            counter: counterReducer
        })
    ]
};
