import { Routes } from '@angular/router';
import { ImageMarkingComponent } from './image-marking/image-marking.component';
import { ImageMarkingDownloadComponent } from './image-marking-download/image-marking-download.component';

export const routes: Routes = [
    {path: '', component: ImageMarkingDownloadComponent}
];
