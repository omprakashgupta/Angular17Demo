import { Routes } from '@angular/router';
import { ImageMarkingComponent } from './image-marking/image-marking.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ImageMarkingDownloadComponent } from './image-marking-download/image-marking-download.component';

export const routes: Routes = [
    // {path: '', component: RxjsComponent},
    // {path: '', component: ImageMarkingComponent}
    {path: '', component: ImageMarkingDownloadComponent},
];
