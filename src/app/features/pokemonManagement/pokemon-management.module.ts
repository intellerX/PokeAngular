import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGroupComponent } from './components/filter-group/filter-group.component';
import { PokemonManagementComponent } from './pages/pokemon-management/pokemon-management.component';
import { SharedModule } from '../../shared/shared.module';
import { ActionsHeaderComponent } from './components/actions-header/actions-header.component';
import { ItemsGridComponent } from './components/items-grid/items-grid.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilterGroupComponent,
    PokemonManagementComponent,
    ActionsHeaderComponent,
    ItemsGridComponent,
    FormComponent,
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [PokemonManagementComponent],
})
export class PokemonManagementModule { }
