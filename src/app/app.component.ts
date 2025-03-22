import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalComponent } from './signal/signal.component';
import { NgrxCounterComponent } from './ngrx/ngrx-counter/ngrx-counter.component';
import { NgrxCounterOutputComponent } from './ngrx/ngrx-counter-output/ngrx-counter-output.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalComponent, NgrxCounterComponent, NgrxCounterOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular17Demo';
}
