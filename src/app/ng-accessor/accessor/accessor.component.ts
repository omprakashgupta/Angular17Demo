import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AccessorChildComponent } from '../accessor-child/accessor-child.component';

@Component({
  selector: 'app-accessor',
  standalone: true,
  imports: [AccessorChildComponent, ReactiveFormsModule],
  templateUrl: './accessor.component.html',
  styleUrl: './accessor.component.css'
})
export class AccessorComponent {
    myForm: FormGroup;

    constructor(private fb: FormBuilder) {
      this.myForm = this.fb.group({
        customField: new FormControl(""), // Define the field
      });
    }
  
    onSubmit(): void {
      console.log('Form Value:', this.myForm.controls["customField"].value);
    }
  
}
