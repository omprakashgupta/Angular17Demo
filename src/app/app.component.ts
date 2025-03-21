import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalComponent } from './signal/signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular17Demo';
}
