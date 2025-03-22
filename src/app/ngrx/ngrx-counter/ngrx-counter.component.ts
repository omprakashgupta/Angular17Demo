import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { increment } from '../store/counter.actions';
import { CoreModule } from '../../core/core.module';
import { IncrementAction } from '../store/counter.actions';

@Component({
  selector: 'app-ngrx-counter',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './ngrx-counter.component.html',
  styleUrl: './ngrx-counter.component.css'
})
export class NgrxCounterComponent {

    constructor(
        private readonly store: Store
    ){}

    onIncrementClick(){
        // this.store.dispatch(increment({value: 2}))
        this.store.dispatch(new IncrementAction(2))
    }

    onDecrementClick(){
    }

}
