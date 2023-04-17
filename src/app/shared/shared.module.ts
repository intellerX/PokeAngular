import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Search, Plus, Save, X, Edit, Trash } from 'angular-feather/icons';

import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputTextComponent } from './custom-input-text/custom-input-text.component';
import { CustomInputRangeComponent } from './custom-input-range/custom-input-range.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInputFilterComponent } from './custom-input-filter/custom-input-filter.component';

const icons = {
  Search,
  Plus,
  Save,
  X,
  Edit,
  Trash,
};

@NgModule({
  declarations: [
    CustomButtonComponent,
    CustomInputTextComponent,
    CustomInputRangeComponent,
    CustomInputFilterComponent,
  ],
  exports: [
    CustomButtonComponent,
    FeatherModule,
    CustomInputTextComponent,
    CustomInputRangeComponent,
    CustomInputFilterComponent,
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
