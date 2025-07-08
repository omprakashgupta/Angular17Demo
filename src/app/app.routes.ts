import { Routes } from '@angular/router';
import { ImageMarkingComponent } from './image-marking/image-marking.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ImageMarkingDownloadComponent } from './image-marking-download/image-marking-download.component';
import { AccessorComponent } from './ng-accessor/accessor/accessor.component';
import { MockInterceptorTestComponent } from './mock-interceptor-test/mock-interceptor-test.component';

export const routes: Routes = [
    // {path: '', component: RxjsComponent},
    // {path: '', component: ImageMarkingComponent}
    // {path: '', component: ImageMarkingDownloadComponent},
    // {path: '', component: AccessorComponent}
    {path: '', component: MockInterceptorTestComponent}
];
