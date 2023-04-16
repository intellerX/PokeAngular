import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input-range',
  templateUrl: './custom-input-range.component.html',
  styleUrls: ['./custom-input-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputRangeComponent),
      multi: true,
    },
  ],
})
export class CustomInputRangeComponent {
  @Input() label = '';
  @Input() name = '';
  @Input() minValue = 0;
  @Input() maxValue = 50;

  value = 50;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: any = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: any = () => {};

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: Event) {
    this.value = parseInt((event.target as HTMLInputElement).value);
    this.onChange(this.value);
    this.onTouched();
  }
}
