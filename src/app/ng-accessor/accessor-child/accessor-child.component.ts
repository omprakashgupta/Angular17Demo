import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-accessor-child',
    standalone: true,
    imports: [],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AccessorChildComponent),
            multi: true, // Allows multiple instances
        },
    ],
    templateUrl: './accessor-child.component.html',
    styleUrl: './accessor-child.component.css'
})
export class AccessorChildComponent implements ControlValueAccessor {

    value: string = '';

    onChange: (value: string) => void = () => { };
    onTouched: () => void = () => { };

    writeValue(value: string): void {
        this.value = value || "";
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    onInputChange(event: Event): void {
        const inputValue = (event.target as HTMLInputElement).value;
        this.value = inputValue;
        this.onChange(inputValue);
    }

}
