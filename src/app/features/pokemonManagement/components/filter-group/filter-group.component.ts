import { Component, Input } from '@angular/core';
import { InputRole } from '../../../../core/enums/inputRole.enum';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss'],
})
export class FilterGroupComponent {
  @Input() gridCompomentRef: any | undefined;

  inputRole = InputRole;

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (this.gridCompomentRef)
        this.gridCompomentRef.onFilter(
          this.searchForm.controls['search'].value
        );
    }
  }

  clearFilter(): void {
    this.searchForm.controls['search'].setValue('');
  }
}
