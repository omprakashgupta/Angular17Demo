import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-ngrx-counter-output',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './ngrx-counter-output.component.html',
    styleUrl: './ngrx-counter-output.component.css'
})
export class NgrxCounterOutputComponent {

    count$!: Observable<number>;

    constructor(store: Store<{ counter: number }>) {
        this.count$ = store.select("counter");
    }
}
