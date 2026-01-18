import { Routes } from '@angular/router';
import { ImageMarkingComponent } from './image-marking/image-marking.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ImageMarkingDownloadComponent } from './image-marking-download/image-marking-download.component';
import { AccessorComponent } from './ng-accessor/accessor/accessor.component';
import { MockInterceptorTestComponent } from './mock-interceptor-test/mock-interceptor-test.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { DocumentsComponent } from './route-reuse/documents/documents.component';
import { DocumentDetailsComponent } from './route-reuse/document-details/document-details.component';

export const routes: Routes = [
    {path: '', redirectTo: 'documents', pathMatch: 'full' },
    // {path: '', component: RxjsComponent},
    // {path: '', component: ImageMarkingComponent}
    // {path: '', component: ImageMarkingDownloadComponent},
    // {path: '', component: AccessorComponent}
    // {path: '', component: MockInterceptorTestComponent}
    // {path: '', component: AccessorComponent},
    // {path: '', component: FileUploadComponent}
    {path: 'documents', component: DocumentsComponent},
    {path: 'documents/:id', component: DocumentDetailsComponent}
];
