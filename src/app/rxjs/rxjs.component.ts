import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent implements OnInit {

  ngOnInit(): void {
    
  }

  private ofObservable(){
    const list = of(1, 2, 3, 4);
    const subscription = list.subscribe({
      next: value => console.log('Observable emitted the next value: ' + value),
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('Observable emitted the complete notification')
    });
    subscription.unsubscribe();
  }

}
