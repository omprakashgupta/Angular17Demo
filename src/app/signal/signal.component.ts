import { Component, computed, effect, signal } from '@angular/core';
import { CoreModule } from '../core/core.module';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CoreModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

    // actions: string[] = [];

    actions = signal<string[]>([]);
    counter = signal(0);
    doubleCounter = computed(()=> this.counter() * 2);

    constructor(){
        effect(() => console.log(this.counter()));
    }

    onIncrementClick(){
        // this.counter.update(oldCounter => oldCounter + 1);
        // this.counter.set(this.counter() + 1);
        // this.actions.push("Increment");

        this.counter.update((oldCounter) => oldCounter + 1);
        this.actions.update((oldActions) => [...oldActions, "Increment"]);
    }

    onDecrementClick(){
        // this.counter.update(oldCounter => oldCounter - 1);
        // this.counter.set(this.counter() - 1);
        // this.actions.push("Decrement");

        this.counter.update((oldCounter) => oldCounter - 1);
        this.actions.update((oldActions) => [...oldActions, "Decrement"]);
    }
}
