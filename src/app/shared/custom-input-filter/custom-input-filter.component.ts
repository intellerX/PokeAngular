import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-custom-input-filter',
  templateUrl: './custom-input-filter.component.html',
  styleUrls: ['./custom-input-filter.component.scss']
})
export class CustomInputFilterComponent {

  public pokemonMain: any = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  @Input() name = '';
  @Input() label = '';
  @Input() placeHolder = '';

  value = '';
  selectedOption = "";







}
