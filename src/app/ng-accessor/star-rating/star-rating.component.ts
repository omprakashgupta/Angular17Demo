import { NgFor } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgFor],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => StarRatingComponent),
        multi: true, // Allows multiple instances
    }
  ],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements ControlValueAccessor {
  value = 0;
  stars = [1, 2, 3, 4, 5];
  onChange = (value: number) => {};
  onTouched = () => {};

  rate(star: number) {
    this.value = star;
    this.onChange(this.value);
    this.onTouched();
  }

  // ControlValueAccessor methods
  writeValue(value: number): void {
    this.value = value || 0;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // handle disabled state
  }
}
