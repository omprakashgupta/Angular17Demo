import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

export const matModule = [
    MatIconModule,
    MatDividerModule,
    MatButtonModule
]

@NgModule({
    imports: [
        ...matModule
    ],
    exports: [
        ...matModule
    ]
})
export class CoreModule{}